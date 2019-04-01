videojs.registerPlugin('pluginDev', function() {
  var myPlayer = this;

	myPlayer.one('loadedmetadata', function() {
	  var playlistItems = document.getElementsByClassName('vjs-playlist-item');
	  // overlay = document.createElement('div');
	  // overlay.className = 'vjs-overlay';
	  // overlay.innerHTML = "dfhfdhfdhfdh";
	  // player.el().appendChild(overlay);
	  playlistData = myPlayer.playlist();

		function setAttr() {
			var i,
				iMax = playlistItems.length;
			for (i = 0; i < iMax; i++) {
				playlistItems[i].setAttribute('alt', 'fdhfd');
			}
		  console.log(iMax);
		}
		setAttr();
	});

});
