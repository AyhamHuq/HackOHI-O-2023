// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment
import { redirectToAuthCodeFlow, getAccessToken } from "./authCodeWithPkce";

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

async function fetchProfile(code) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${code}` },
  });

  return await result.json();
}
