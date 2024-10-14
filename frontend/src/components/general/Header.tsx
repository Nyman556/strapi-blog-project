import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
	return (
		<div className="px-16 py-6 flex justify-between items-center border-b">
			<Link to="/" className=" text-2xl font-semibold">
				Logo
			</Link>
			<div className="flex gap-4">
				<Button content="sign up" variant="secondary" urlPath="/signup" />
				<Button content="login" variant="primary" urlPath="/login" />
			</div>
		</div>
	);
}

export default Header;
