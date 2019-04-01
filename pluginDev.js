videojs.registerPlugin('pluginDev', function() {
  var player = this,
  overlay = document.createElement('p');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "";
  player.el().appendChild(overlay);
});
