import { Link } from "react-router-dom";
import "./App.css";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Login from "./login";
// import {
//   redirectToAuthCodeFlow,
//   getAccessToken,
// } from "./get_user_profile/src/authCodeWithPkce";

export const Home = () => {
  return (
    <>
      <Header />
      <TextInput />
      <Link to="/login">login</Link>
      <Link to="/redirect">erccrceve</Link>
      <Helmet>
        <script
          src="https://sdk.scdn.co/spotify-player.js"
          type="text/babel"
        ></script>
        <script src="./player.js" type="text/babel"></script>
        <script src="./test2.js" type="text/babel"></script>
      </Helmet>
      {/* <Button onClick={Initi} text="play" />  */}
    </>
  );
};

// function Initi() {
//   //<script src="https://sdk.scdn.co/spotify-player.js"></script>;

//   window.onSpotifyWebPlaybackSDKReady = () => {
//     const token =
//       "BQCqIJdJi1t8_8lApapzTeXIMlxA7NbItZuk2T_MvL7LLoTunBLLax5zEpMINuaPtl_1c64d2rHFLnEaMyQp1xTPpepT1623GOousR-qStVgA__vvh2omhKOVLASXF7VtYW5ko9D91r14iLJE-PeR8XsCz7CwF5R3XxUptignqKAUbafJ11D45KU9RYT9uleiMZTe9M";
//     const player = new Spotify.Player({
//       name: "Web Playback SDK Quick Start Player",
//       getOAuthToken: (cb) => {
//         cb(token);
//       },
//       volume: 0.5,
//     });

//     let songSet = new Set();
//     var currentSong = player.getCurrentState().track_window.current_track;

//     // Ready
//     player.addListener("ready", ({ device_id }) => {
//       console.log("Ready with Device ID", device_id);
//     });

//     // Not Ready
//     player.addListener("not_ready", ({ device_id }) => {
//       console.log("Device ID has gone offline", device_id);
//     });

//     player.addListener("initialization_error", ({ message }) => {
//       console.error(message);
//     });

//     player.addListener("authentication_error", ({ message }) => {
//       console.error(message);
//     });

//     player.addListener("account_error", ({ message }) => {
//       console.error(message);
//     });

//     document.getElementById("nextTrack").onclick = function () {
//       currentSong = playNextSong(player, songSet);
//     };

//     player.connect();
//   };

//   function playNextSong(player, set) {
//     const randomNum = Math.floor(Math.random() * 100) + 1;
//     set.Add(player.getCurrentState().track_window.current_track);
//     for (
//       let i = 0;
//       i < randomNum ||
//       set.has(player.getCurrentState().track_window.current_track);
//       i++
//     ) {
//       player.NextTrack();
//     }
//     return player.getCurrentState().track_window.current_track;
//   }
// }

const Header = () => {
  return <h1>Guess the song!</h1>;
};

const TextInput = () => {
  return (
    <>
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className="search-box">
        <input type="url"></input>
      </div>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Home;
