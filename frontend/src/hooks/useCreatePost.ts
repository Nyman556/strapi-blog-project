import { useState } from "react";

interface BlogPostData {
	title: string;
	content: string;
	excerpt: string;
	date: string;
	slug: string;
	author: string;
}

interface CreatePostResponse {
	id: number;
	title: string;
	content: string;
	excerpt: string;
	date: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	author: string;
}

const useCreatePost = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const createPost = async (postData: BlogPostData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			// Hämta JWT från localStorage
			const jwt = localStorage.getItem("jwt");
			if (!jwt) {
				throw new Error("Ingen JWT funnen, användaren är inte inloggad.");
			}

			const response = await fetch("http://localhost:1337/api/blog-posts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwt}`, // Lägg till Authorization-headern
				},
				body: JSON.stringify({ data: postData }),
			});

			if (!response.ok) {
				throw new Error("Failed to create post");
			}

			const data: { data: CreatePostResponse } = await response.json();
			console.log("Post created successfully:", data.data);
			setSuccess(true);
		} catch (err) {
			setError((err as Error).message);
		} finally {
			setLoading(false);
		}
	};

	return { createPost, loading, error, success };
};

export default useCreatePost;
