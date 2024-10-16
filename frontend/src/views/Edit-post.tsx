import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BasePost } from "../types/postTypes";
import useUser from "../hooks/useUser";

function EditPostPage() {
	const { slug } = useParams<{ slug: string }>();
	const { user } = useUser();
	const [post, setPost] = useState<BasePost | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(
					`http://localhost:1337/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
				);
				const data = await response.json();

				if (data.data && data.data.length > 0) {
					setPost(data.data[0]);
					setContent(data.data[0].content);
				} else {
					setError("Post not found");
				}
			} catch (err) {
				setError("Error fetching post");
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, [slug]);

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const handleSave = async () => {
		// Logic to save updated post content
		if (!post || !user) return;

		try {
			const response = await fetch(
				`http://localhost:1337/api/blog-posts/${post.id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("jwt")}`,
					},
					body: JSON.stringify({
						data: {
							content,
						},
					}),
				}
			);

			if (response.ok) {
				alert("Post updated successfully!");
			} else {
				throw new Error("Failed to update post");
			}
		} catch (err) {
			setError("Error updating post");
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div>
			<h1 className="text-3xl mb-4">Edit Post: {post?.title}</h1>
			<textarea
				className="w-full p-2 border rounded"
				value={content}
				onChange={handleContentChange}
				rows={10}
			/>
			<div className="mt-4">
				<button
					onClick={handleSave}
					className="bg-blue-600 text-white p-2 rounded"
				>
					Save
				</button>
			</div>
		</div>
	);
}

export default EditPostPage;
