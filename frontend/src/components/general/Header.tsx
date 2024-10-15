import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useUser } from "../../contexts/UserContext";

function Header() {
	const { user, clearUser } = useUser();
	const navigate = useNavigate();

	const handleLogout = () => {
		clearUser();
		navigate("/");
	};

	return (
		<div className="px-16 py-6 flex justify-between items-center border-b">
			<Link to="/" className="text-2xl font-semibold">
				Logo
			</Link>
			<div className="flex gap-4">
				{user ? (
					<>
						<Button
							content="Create Post"
							variant="secondary"
							urlPath="/create-post"
						/>
						<Button content="Logout" variant="primary" onClick={handleLogout} />
					</>
				) : (
					<>
						<Button content="Sign Up" variant="secondary" urlPath="/signup" />
						<Button content="Login" variant="primary" urlPath="/login" />
					</>
				)}
			</div>
		</div>
	);
}

export default Header;
