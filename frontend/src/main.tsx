// src/main.tsx (or main.jsx)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./views/Error-page";
import Layout from "./Layout";
import LoginPage from "./views/Login-page";
import SignupPage from "./views/Signup-page";
import CreatePostPage from "./views/Create-post";
import BlogPostPage from "./views/Blog-post";
import EditPostPage from "./views/Edit-post";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/signup",
				element: <SignupPage />,
			},
			{
				path: "/create-post",
				element: <CreatePostPage />,
			},
			{
				path: "/:slug",
				element: <BlogPostPage />,
			},
			{
				path: "/edit/:slug",
				element: <EditPostPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
