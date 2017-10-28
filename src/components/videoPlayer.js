angular.module('video-player')
  .controller('videoPlayerController', function() {
    this.urlMaker = () => {
      return 'https://www.youtube.com/embed/' + this.video.id.videoId;
    };
  })

  .component('videoPlayer', {
    bindings: {
      video: '<'
    },

    controller: 'videoPlayerController',

    templateUrl: 'src/templates/videoPlayer.html'
  });
