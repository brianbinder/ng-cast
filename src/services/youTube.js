angular.module('video-player')
  .service('youTube', function($http, $window) {
    this.search = (query, callback) => {
      $http ({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: $window.YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          type: 'video',
          dataType: 'json',
          videoEmbeddable: 'true',
          part: 'snippet'
        }
      }).then( (response) => {
        callback(response.data.items);
      }, (response) => {
        console.log('error', response);
      });
    };
  });
