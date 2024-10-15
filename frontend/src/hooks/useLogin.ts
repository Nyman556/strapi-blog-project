import { useContext, useState } from "react";
import axios from "axios";
import { LoginResponse } from "../types/userTypes";
import { UserContext } from "../contexts/UserContext";

const useLogin = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error("useLogin must be used within a UserProvider");
	}

	const { setUser } = context;

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const login = async (): Promise<
		LoginResponse | { success: false; message: string }
	> => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.post(
				"http://localhost:1337/api/auth/local",
				{
					identifier: email,
					password: password,
				}
			);

			if (response.status === 200) {
				localStorage.setItem("jwt", response.data.jwt);
				localStorage.setItem("user", JSON.stringify(response.data.user));

				setUser(response.data.user);
				return {
					jwt: response.data.jwt,
					user: response.data.user,
				};
			} else {
				throw new Error("Login failed");
			}
		} catch (err: any) {
			setError(err.response?.data?.message || "An error occurred");
			return { success: false, message: err.message };
		} finally {
			setLoading(false);
		}
	};

	return {
		email,
		password,
		loading,
		error,
		handleEmailChange,
		handlePasswordChange,
		login,
	};
};

export default useLogin;
