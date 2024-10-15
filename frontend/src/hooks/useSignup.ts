import { useState } from "react";

interface SignupResponse {
	success: boolean;
	message?: string;
}

const useSignup = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(e.target.value);
	};

	const signup = async (): Promise<SignupResponse> => {
		setLoading(true);
		setError(null);

		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			setLoading(false);
			return { success: false, message: "Passwords do not match." };
		}

		try {
			if (email === "test@example.com" && password === "password") {
				return { success: true };
			} else {
				throw new Error("Signup failed");
			}
		} catch (err: any) {
			setError(err.message);
			return { success: false, message: err.message };
		} finally {
			setLoading(false);
		}
	};

	return {
		email,
		password,
		confirmPassword,
		loading,
		error,
		handleEmailChange,
		handlePasswordChange,
		handleConfirmPasswordChange,
		signup,
	};
};

export default useSignup;
