import { Outlet } from "react-router-dom";
import Header from "./components/general/Header";

function Layout() {
	return (
		<div>
			<Header />
			<main className="mx-16 py-4">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
