import { Outlet } from "react-router-dom";
import Header from "./components/general/Header";
import { UserProvider } from "./contexts/UserContext";

function Layout() {
	return (
		<div>
			<UserProvider>
				<Header />
				<main className="mx-16 py-4">
					<Outlet />
				</main>
			</UserProvider>
		</div>
	);
}

export default Layout;
