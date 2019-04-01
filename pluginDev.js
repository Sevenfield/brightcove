videojs.registerPlugin('pluginDev', function() {
  var myPlayer = this;

	myPlayer.one('loadedmetadata', function() {
	  var playlistItems = document.querySelectorAll('.vjs-playlist-thumbnail img'),
	  	vidTitles = document.getElementsByClassName('.vjs-playlist-name').getAttribute('title');

		function setThumbnailAltAttr() {
			var i,
				items = playlistItems.length;

			for (i = 0; i < items; i++) {
				playlistItems[i].setAttribute('alt', vidTitles[i]);
			}
		  //console.log(vidTitles);
		}
		setThumbnailAltAttr();
	});

});
