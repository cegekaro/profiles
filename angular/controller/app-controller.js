(function () {
    'use strict';

angular.module('profiles').controller('AppController', ['$scope', '$http', function ($scope, $http) {
    $scope.repo = {
        lastCommit: {
            date: undefined,
            sha: undefined,
            url: undefined
        }
    };

    $http.get('https://api.github.com/repos/cegekaro/profiles/git/refs/heads/master').success(function(master)
    {
        $http.get(master.object.url).success(function(lastCommit)
        {
            $scope.repo.lastCommit.date = new Date(lastCommit.author.date);
            $scope.repo.lastCommit.sha = lastCommit.sha;
            $scope.repo.lastCommit.url = lastCommit.html_url;
        });
    });
}]);

})();
