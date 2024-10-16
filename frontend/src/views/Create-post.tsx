import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import useCreatePost from "../hooks/useCreatePost";

function CreatePostPage() {
	const { user } = useUser();
	const [content, setContent] = useState("");
	const [excerpt, setExcerpt] = useState("");
	const [title, setTitle] = useState("");
	const { createPost, loading, error, success } = useCreatePost();

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const handleExcerptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setExcerpt(e.target.value);
	};
	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!user?.username) {
			console.error("User is not logged in");
			return;
		}

		const postData = {
			author: user.username,
			title,
			excerpt,
			content,
			date: new Date().toISOString(),
			slug: excerpt.trim().toLowerCase().replace(/\s+/g, "-"),
		};

		// Call createPost from the hook to submit the post
		await createPost(postData);
	};

	return (
		<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
			<div className="mb-4">
				<label className="block text-sm font-medium mb-2">Author</label>
				<p className="p-2 border rounded w-fit">
					{user?.username || "Unknown"}
				</p>
			</div>
			<div className="mb-4">
				<label className="block text-sm font-medium mb-2" htmlFor="title">
					Title
				</label>
				<input
					type="text"
					id="title"
					onChange={handleTitleChange}
					value={title}
					placeholder="Title of blog post..."
					className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
					autoComplete="false"
				/>
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium mb-2" htmlFor="excerpt">
					Excerpt
				</label>
				<input
					type="text"
					id="excerpt"
					onChange={handleExcerptChange}
					value={excerpt}
					placeholder="Excerpt of blog post..."
					className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
					autoComplete="false"
				/>
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium mb-2" htmlFor="content">
					Content
				</label>
				<textarea
					id="content"
					onChange={handleContentChange}
					value={content}
					className="w-full h-32 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
					placeholder="Content of blog post..."
				/>
			</div>

			<div className="mb-4">
				<button
					type="submit"
					className="w-full p-2 bg-gray-800 text-white rounded hover:bg-gray-800 transition duration-200"
					disabled={loading}
				>
					{loading ? "Creating..." : "Create Post"}
				</button>
			</div>

			{error && <p className="text-red-600">Error: {error}</p>}
			{success && <p className="text-green-600">Post created successfully!</p>}
		</form>
	);
}

export default CreatePostPage;
