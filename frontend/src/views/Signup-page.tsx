import useSignup from "../hooks/useSignup";

function SignupPage() {
	const {
		email,
		password,
		confirmPassword,
		loading,
		error,
		handleEmailChange,
		handlePasswordChange,
		handleConfirmPasswordChange,
		signup,
	} = useSignup();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await signup();
		if (response.success) {
			console.log("Signup successful");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center my-16">
			<h1 className="text-3xl mb-6">Sign Up</h1>
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
				<div className="mb-4">
					<label
						className="block text-sm font-medium mb-2"
						htmlFor="confirmPassword"
					>
						Confirm Password
					</label>
					<input
						type="password"
						id="confirmPassword"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
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
					{loading ? "Signing up..." : "Sign Up"}
				</button>
			</form>
			<p className="mt-4 text-sm">
				Already have an account?
				<a href="/login" className="text-gray-800 hover:underline mx-1">
					Login
				</a>
			</p>
		</div>
	);
}

export default SignupPage;
