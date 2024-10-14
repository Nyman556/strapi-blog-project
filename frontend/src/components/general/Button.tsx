interface ButtonProps {
	content: string;
	variant: "primary" | "secondary";
}

function Button({ content, variant }: ButtonProps) {
	const styles = {
		primary: "py-2 px-4 bg-gray-900 text-white rounded capitalize border",
		secondary: "py-2 px-4 bg-white border text-gray-900 rounded capitalize",
	};
	return <button className={styles[variant]}>{content}</button>;
}

export default Button;
