import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function LoginPage() {
	const {
		email,
		password,
		loading,
		error,
		handleEmailChange,
		handlePasswordChange,
		login,
	} = useLogin();
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await login();

		if ("jwt" in response) {
			localStorage.setItem("jwt", response.jwt);
			localStorage.setItem("user", JSON.stringify(response.user));
			navigate("/");
		} else {
			console.log("Login failed:", response.message);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center my-16">
			<h1 className="text-3xl mb-6">Login</h1>
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded shadow-md w-80"
			>
				<div className="mb-4">
					<label className="block text-sm font-medium mb-2" htmlFor="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={handleEmailChange}
						required
						className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
						placeholder="you@example.com"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium mb-2" htmlFor="password">
						Password
					</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={handlePasswordChange}
						required
						className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
						placeholder="••••••••"
					/>
				</div>
				{error && <p className="text-red-500 mb-4">{error}</p>}
				<button
					type="submit"
					disabled={loading}
					className={`w-full p-2 rounded ${
						loading ? "bg-gray-400" : "bg-gray-800 hover:bg-gray-800"
					} text-white transition duration-200`}
				>
					{loading ? "Logging in..." : "Login"}
				</button>
			</form>
			<p className="mt-4 text-sm">
				<a href="/forgot-password" className="text-gray-800 hover:underline">
					Forgot your password?
				</a>
			</p>
			<p className="mt-2 text-sm">
				Don't have an account?
				<a href="/signup" className="text-gray-800 hover:underline mx-1">
					Sign up
				</a>
			</p>
		</div>
	);
}

export default LoginPage;
