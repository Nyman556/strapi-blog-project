interface ButtonProps {
	content: string;
	variant: "primary" | "secondary";
}

function Button({ content, variant }: ButtonProps) {
	const styles = {
		general: "py-2 px-4 rounded capitalize border",
		primary: "bg-gray-900 text-white",
		secondary: "bg-white text-gray-900",
	};

	return (
		<button className={`${styles.general} ${styles[variant]}`}>
			{content}
		</button>
	);
}

export default Button;
