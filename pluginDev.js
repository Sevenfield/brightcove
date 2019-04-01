videojs.registerPlugin('pluginDev', function() {
  var myPlayer = this;

	myPlayer.one('loadedmetadata', function() {
	  //var playlistItems = document.getElementsByClassName('vjs-playlist-thumbnail'),

	  var playlistItems = document.querySelectorAll('.vjs-playlist-thumbnail img'),
	  	playlistData = myPlayer.playlist();

		function setAttr() {
			var i,
				iMax = playlistItems.length;
			for (i = 0; i < iMax; i++) {
				playlistItems[i].setAttribute('alt', 'fdhfd');
			}
		  console.log(playlistItems);
		}
		setAttr();
	});

});
