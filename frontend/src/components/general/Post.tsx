import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { BasePost } from "../../types/postTypes";

export interface PostProps {
	post: BasePost;
}

function Post({ post }: PostProps) {
	return (
		<div className="flex flex-col border-b-2 py-4">
			<h2 className="text-2xl font-medium">{post.title}</h2>
			<p className="text-xl text-gray-700">{post.excerpt}</p>
			<div className="flex justify-between">
				<p>
					By {post.author} | {post.date.toLocaleDateString()}
				</p>
				<Link to={`/${post.id}`} className="flex items-center">
					Read More <FiChevronRight />
				</Link>
			</div>
		</div>
	);
}

export default Post;
