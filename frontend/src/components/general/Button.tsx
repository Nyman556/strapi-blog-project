import { Link } from "react-router-dom";

interface ButtonProps {
	content: string;
	variant: "primary" | "secondary";
	urlPath?: string;
	onClick?: () => void;
}

function Button({ content, variant, urlPath, onClick }: ButtonProps) {
	const styles = {
		general: "py-2 px-4 rounded capitalize border",
		primary: "bg-gray-900 text-white",
		secondary: "bg-white text-gray-900",
	};

	const buttonClasses = `${styles.general} ${styles[variant]}`;

	return urlPath ? (
		<Link to={urlPath} className={buttonClasses}>
			{content}
		</Link>
	) : (
		<button className={buttonClasses} onClick={onClick}>
			{content}
		</button>
	);
}

export default Button;
