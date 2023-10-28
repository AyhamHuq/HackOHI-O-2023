import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Login from "./login";
import {
	redirectToAuthCodeFlow,
	getAccessToken,
} from "./get_user_profile/src/authCodeWithPkce.ts";

export const Redirect = () => {
	const [code, setCode] = useState(null);

	useEffect(() => {
		console.log(`at top of useeffect: code = ${code}`);
		if (code === null) {
			authenticate().then((c) => {
				console.log(`c = ${c}`);
				setCode(c);
			});
		}
	}, []);

	return (
		<>
			<p>cveefv</p>
			<Link to="/">home</Link>
		</>
	);
};

const authenticate = async () => {
	const clientId = "8f9515b2738142f2b3472bcb86836042";
	const params = new URLSearchParams(window.location.search);
	const c = params.get("code");

	if (!c) {
		console.log("!code");
		redirectToAuthCodeFlow(clientId);
	} else {
		return c;
	}
};

export default Redirect;
