angular.module('video-player')
  .controller('searchController', function() {
    this.searchResults = () => {
      this.service.search(this.query, this.result);
    };
  })

  .component('search', {
    bindings: {
      result: '<',
      service: '<'
    },

    controller: 'searchController',

    templateUrl: 'src/templates/search.html'
  });
