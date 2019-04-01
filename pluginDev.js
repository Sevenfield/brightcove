videojs.registerPlugin('pluginDev', function() {
  var myPlayer = this;

	myPlayer.one('loadedmetadata', function() {
	  var playlistItems = document.querySelectorAll('.vjs-playlist-thumbnail img'),
	  	vidTitles = document.querySelectorAll('.vjs-playlist-name').textContent,
	  	playlistData = myPlayer.playlist();

		function setThumbnailAltAttr() {
			var i,
				items = playlistItems.length,
				titles = vidTitles.length;
			for (i = 0; i < items && titles; i++) {
				playlistItems[i].setAttribute('alt', vidTitles[i]);
			}
		  console.log(vidTitles);
		}
		setThumbnailAltAttr();
	});

});
