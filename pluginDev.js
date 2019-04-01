videojs.registerPlugin('pluginDev', function() {
  var player = this,
  overlay = document.createElement('span');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "dfhfdhfdhfdh";
  player.el().appendChild(overlay);
});
