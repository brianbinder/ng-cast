angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      selectVideo: '<',
      video: '<'
    },

    templateUrl: 'src/templates/videoListEntry.html'

  });
