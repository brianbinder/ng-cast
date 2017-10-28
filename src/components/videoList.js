angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      selectVideo: '<'
    },

  template: `
  <ul class="video-list">
    <video-list-entry
    select-video="$ctrl.selectVideo"
    video="video"
    ng-repeat="video in $ctrl.videos track by $index"
    ng-click="console.log('hello')"
    ><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
  </ul>
  `
});
