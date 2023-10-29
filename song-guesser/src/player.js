window.onSpotifyWebPlaybackSDKReady = () => {
  const player = new Spotify.Player({
    name: "Web Playback SDK Quick Start Player",
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5,
  });

  let songSet = new Set();
  var currentSong = player.getCurrentState().track_window.current_track;

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
  });

  // Not Ready
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  player.addListener("initialization_error", ({ message }) => {
    console.error(message);
  });

  player.addListener("authentication_error", ({ message }) => {
    console.error(message);
  });

  player.addListener("account_error", ({ message }) => {
    console.error(message);
  });

  document.getElementById("nextTrack").onclick = function () {
    currentSong = playNextSong(player, songSet);
  };

  player.connect();
};

function playNextSong(player, set) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  set.Add(player.getCurrentState().track_window.current_track);
  for (
    let i = 0;
    i < randomNum ||
    set.has(player.getCurrentState().track_window.current_track);
    i++
  ) {
    player.NextTrack();
  }
  return player.getCurrentState().track_window.current_track;
}
