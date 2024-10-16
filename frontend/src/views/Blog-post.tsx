import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BasePost } from "../types/postTypes";
import DOMPurify from "dompurify";
import useUser from "../hooks/useUser";

interface ApiResponse {
	data: BasePost[];
}

function BlogPostPage() {
	const { slug } = useParams<{ slug: string }>();
	const { user, loading: userLoading } = useUser();
	const [post, setPost] = useState<BasePost | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(
					`http://localhost:1337/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
				);
				const data: ApiResponse = await response.json();

				if (data.data && data.data.length > 0) {
					setPost(data.data[0]);
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

	if (loading || userLoading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	const isAuthor = user?.username === post?.author;

	return (
		<div>
			<h1 className="text-3xl text-center mb-8">{post?.title}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(post?.content || ""),
				}}
			/>

			<div className="flex justify-between self-end mt-4">
				<p>
					<strong>Author:</strong> {post?.author}
				</p>
				<p>
					<strong>Published on:</strong>{" "}
					{new Date(post?.publishedAt).toLocaleDateString()}
				</p>
			</div>

			{isAuthor && (
				<div className="mt-4">
					<Link
						to={`/edit/${post?.slug}`}
						className="text-blue-600 hover:text-blue-800"
					>
						Edit Post
					</Link>
				</div>
			)}
		</div>
	);
}

export default BlogPostPage;
