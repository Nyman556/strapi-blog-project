import { useEffect, useState } from "react";
import Post from "../general/Post"; // Ensure this import path is correct
import { BasePost } from "../../types/postTypes";

function BlogPosts() {
	const [posts, setPosts] = useState<BasePost[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch(
					"http://localhost:1337/api/blog-posts?populate=*"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setPosts(data.data);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<section className="blog-posts">
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</section>
	);
}

export default BlogPosts;
