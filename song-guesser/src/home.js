import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Login from "./login";
import {
	redirectToAuthCodeFlow,
	getAccessToken,
} from "./get_user_profile/src/authCodeWithPkce.ts";

export const Home = () => {
	const [code, setCode] = useState();

	return (
		<>
			<Header />
			<TextInput />
			<Button
				onClick={() => {
					authenticate().then(() => {
						console.log("fulfilled");
					});
				}}
				text="x"
			/>
			<Button
				onClick={() => {
					loadPlaylist("37i9dQZF1DX0XUsuxWHRQd", code).then(
						(json) => {
							console.log(json);
						}
					);
				}}
				text="Submit"
			/>
			<Link to="/login">login</Link>
		</>
	);
};

const authenticate = async () => {
	const clientId = "9e68d87c869748fc9865e953f83851e7";
	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");

	if (!code) {
		redirectToAuthCodeFlow(clientId);
	} else {
		const accessToken = await getAccessToken(clientId, code);
		const profile = await fetchProfile(accessToken);
		const result = await fetch(
			"https://api.spotify.com/v1/playlists/37i9dQZF1EQqedj0y9Uwvu/tracks",
			{
				method: "GET",
				headers: { Authorization: `Bearer ${code}` },
			}
		);
		console.log(result);
	}
};

async function fetchProfile(code) {
	const result = await fetch("https://api.spotify.com/v1/me", {
		method: "GET",
		headers: { Authorization: `Bearer ${code}` },
	});

	return await result.json();
}

const loadPlaylist = async (playlistID, code) => {
	console.log(code);
	const result = await fetch(
		`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
		{
			method: "GET",
			headers: { Authorization: `Bearer ${code}` },
		}
	);
	return await result.json();
};

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
