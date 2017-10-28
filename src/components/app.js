angular.module('video-player')
  .controller('appController', function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (videos) => {
      if (videos) {
        this.videos = videos;
        this.currentVideo = videos[0];
      }
    };

    this.$onInit = () => {
      youTube.search('', this.searchResults);
    };

  })

  .component('app', {
    controller: 'appController',
    templateUrl: 'src/templates/app.html'


  });
