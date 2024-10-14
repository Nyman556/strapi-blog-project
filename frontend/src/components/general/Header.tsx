import Button from "./Button";

function Header() {
	return (
		<div className=" p-16 flex justify-between">
			<p>Placeholder logo</p>
			<div className="flex gap-4">
				<Button content="sign up" variant="secondary" />
				<Button content="login" variant="primary" />
			</div>
		</div>
	);
}

export default Header;
