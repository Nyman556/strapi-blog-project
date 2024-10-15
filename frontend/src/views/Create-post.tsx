import { useState } from "react";
import { useUser } from "../contexts/UserContext";

function CreatePostPage() {
	const { user } = useUser();
	const [content, setContent] = useState("");
	const [excerpt, setExcerpt] = useState("");

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const handleExcerptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setExcerpt(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const postData = {
			author: user?.username,
			excerpt,
			content,
			date: new Date(),
		};

		console.log("Submitting Post:", postData);
	};

	return (
		<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
			<div className="mb-4">
				<label className="block text-sm font-medium mb-2">Author</label>
				<p className="p-2 border rounded w-fit">{user?.username}</p>
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
				>
					Create Post
				</button>
			</div>
		</form>
	);
}

export default CreatePostPage;
