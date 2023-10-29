function playNextSong(player, set) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  for (
    let i = 0;
    i < randomNum ||
    set.has(player.getCurrentState().track_window.current_track);
    i++
  ) {
    player.NextTrack();
    set.Add(player.getCurrentState().track_window.current_track);
  }
}
