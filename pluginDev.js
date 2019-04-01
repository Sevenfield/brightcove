videojs.registerPlugin('pluginDev', function() {
  var myPlayer = this:
  // overlay = document.createElement('div');
  // overlay.className = 'vjs-overlay';
  // overlay.innerHTML = "dfhfdhfdhfdh";
  // player.el().appendChild(overlay);
  playlistData = myPlayer.playlist();
  console.log(playlistData);
});
