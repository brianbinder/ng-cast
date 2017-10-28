angular.module('video-player')

  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.activeVideo = this.videos[0];

      this.selectVideo = (video) => {
        this.activeVideo = video;
      };
    },


  template: `
  <div id="app container">
  <nav class="navbar">
    <div class="col-md-6 col-md-offset-3">
      <search ng-click="$ctrl.selectVideo($ctrl.videos[2])"><h5><em>search</em> component goes here</h5></search>
    </div>
  </nav>
  <div class="row">
    <div class="col-md-7">
      <video-player
      video="$ctrl.activeVideo"
      ><h5><em>videoPlayer</em> component goes here</h5></video-player>
    </div>
    <div class="col-md-5">
      <video-list
      videos="$ctrl.videos"
      select-video="$ctrl.selectVideo"
      ><h5><em>videoList</em> component goes here</h5></video-list>
    </div>
  <div>
</div>
`
  });
