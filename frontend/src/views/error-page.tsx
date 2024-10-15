import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	const errorMessage =
		(error as { statusText?: string; message?: string }) || {};

	return (
		<div className="w-screen h-screen flex flex-col justify-center text-center">
			<h1 className=" text-3xl">Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{errorMessage.statusText || errorMessage.message}</i>
			</p>
			<Link to="/" className=" text-bold underline">
				Take me back!
			</Link>
		</div>
	);
}

export default ErrorPage;
