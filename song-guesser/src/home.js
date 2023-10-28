import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Login from "./login";
import {
	redirectToAuthCodeFlow,
	getAccessToken,
} from "./get_user_profile/src/authCodeWithPkce.ts";

export const Home = () => {
	return (
		<>
			<Header />
			<TextInput />
			{/* <Button onClick={authenticate} text="x" /> */}
			<Link to="/login">login</Link>
			<Link to="/redirect">erccrceve</Link>
		</>
	);
};

// const authenticate = async () => {
// 	const clientId = "8f9515b2738142f2b3472bcb86836042";
// 	const params = new URLSearchParams(window.location.search);
// 	console.log(window.location.search);
// 	console.log(params);
// 	const code = params.get("code");

// 	if (!code) {
// 		console.log("!code");
// 		redirectToAuthCodeFlow(clientId);
// 	} else {

// 		console.log("code successful");
// 		const accessToken = await getAccessToken(clientId, code);
// 		const profile = await fetchProfile(accessToken);
// 		const result = await fetch(
// 			"https://api.spotify.com/v1/playlists/37i9dQZF1EQqedj0y9Uwvu/tracks",
// 			{
// 				method: "GET",
// 				headers: { Authorization: `Bearer ${code}` },
// 			}
// 		);
// 		console.log(result);
// 	}
// };

const Header = () => {
	return <h1>Welcome to Song Guesser!</h1>;
};

const TextInput = () => {
	return (
		<>
			<h2>Paste a Spotify playlist link here:</h2>
			<input type="url"></input>
		</>
	);
};

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
};

export default Home;
