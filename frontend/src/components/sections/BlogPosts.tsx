import Post from "../general/Post";

function BlogPosts() {
	const posts = [
		{
			id: 1,
			title: "First Post",
			excerpt: "This is the first post.",
			content: "Lorem ipsum",
			date: new Date(2023, 4, 15),
			author: "John Doe",
		},
		{
			id: 2,
			title: "Second Post",
			excerpt: "This is the second post.",
			content: "Lorem ipsum",
			date: new Date(2023, 5, 10),
			author: "Jane Smith",
		},
		{
			id: 3,
			title: "Third Post",
			excerpt: "This is the third post.",
			content: "Lorem ipsum",
			date: new Date(2023, 6, 20),
			author: "Alice Johnson",
		},
	];

	return (
		<section className="blog-posts">
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</section>
	);
}

export default BlogPosts;
