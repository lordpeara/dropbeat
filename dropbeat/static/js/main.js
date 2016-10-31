'use strict';

require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery-3.1.1.min',
    handlebars: 'lib/handlebars-4.0.5',
    domReady: 'lib/domReady'
  }

});

require([
  'domReady', 'dropbeat', 'jquery'

], function (domReady, Dropbeat, $) {
  domReady(Dropbeat.initialize);
});

// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady () {
  require(['player'], function (players) {
    players.YoutubePlayer.init();
  });
};
