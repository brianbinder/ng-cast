angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (query, callback) => {
      $http ({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          type: 'video',
          dataType: 'json',
          videoEmbeddable: 'true',
          part: 'snippet'
        }
      }).then(function successCallback(response) {
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('error', response);
      });
    };
  });
