import { createContext, useContext, useState, ReactNode } from "react";
import { BaseUser } from "../types/userTypes";

interface UserContextType {
	user: BaseUser | null;
	setUser: (user: BaseUser | null) => void;
	clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<BaseUser | null>(
		JSON.parse(localStorage.getItem("user") || "null")
	);

	const clearUser = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("jwt");
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, setUser, clearUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};

export { UserContext };
