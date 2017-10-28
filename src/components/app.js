angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
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
        console.log('hello');
      };

    },



    template: `
  <div id="app container">
  <nav class="navbar">
    <div class="col-md-6 col-md-offset-3">
      <search result="$ctrl.searchResults"><h5><em>search</em> component goes here</h5></search>
    </div>
  </nav>
  <div class="row">
    <div class="col-md-7">
      <video-player
      video="$ctrl.currentVideo"
      ng-if="$ctrl.currentVideo"
      ><h5><em>videoPlayer</em> component goes here</h5></video-player>
    </div>
    <div class="col-md-5">
      <video-list
      videos="$ctrl.videos"
      on-click="$ctrl.selectVideo"
      ><h5><em>videoList</em> component goes here</h5></video-list>
    </div>
  <div>
</div>
`
  });
