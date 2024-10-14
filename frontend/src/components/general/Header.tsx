import Button from "./Button";

function Header() {
	return (
		<div className="px-16 py-6 flex justify-between items-center border-b">
			<p>Placeholder logo</p>
			<div className="flex gap-4">
				<Button content="sign up" variant="secondary" urlPath="/signup" />
				<Button content="login" variant="primary" urlPath="/login" />
			</div>
		</div>
	);
}

export default Header;
