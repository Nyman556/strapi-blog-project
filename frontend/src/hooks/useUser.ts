import { useState, useEffect } from "react";
import { BaseUser } from "../types/userTypes";

const useUser = () => {
	const [user, setUser] = useState<BaseUser | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		const storedJwt = localStorage.getItem("jwt");

		if (storedUser && storedJwt) {
			setUser(JSON.parse(storedUser));
		} else {
			setUser(null);
			setError("No user found in local storage");
		}

		setLoading(false);
	}, []);

	const clearUser = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("jwt");
		setUser(null);
	};

	return { user, loading, error, clearUser };
};

export default useUser;
