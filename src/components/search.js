angular.module('video-player')
  .controller('searchController', function(youTube) {
    this.searchResults = () => {
      youTube.search(this.query, this.result);
    };
  })

  .component('search', {
    bindings: {
      result: '<'
    },

    controller: 'searchController',

    templateUrl: 'src/templates/search.html'
  });
