videojs.registerPlugin('pluginDev', function() {
  var myPlayer = this;

	myPlayer.one('loadedmetadata', function() {
	  var playlistItems = document.querySelectorAll('.vjs-playlist-thumbnail img'),
	  	vidTitle = document.querySelectorAll('.vjs-playlist-name').textContent,
	  	playlistData = myPlayer.playlist();

		function setAttr() {
			var i,
				iMax = playlistItems.length;
			for (i = 0; i < iMax; i++) {
				playlistItems[i].setAttribute('alt', vidTitle);
			}
		  console.log(playlistItems);
		}
		setAttr();
	});

});
