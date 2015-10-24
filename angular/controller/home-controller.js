(function () {
    'use strict';

    angular.module('profiles').controller('HomeController', ['$scope', '$http', 'API', function ($scope, $http, API) {
        $scope.repo = {
            lastCommit: {
                date: undefined,
                sha: undefined,
                url: undefined
            }
        };

        $http.get(API.github.repo).success(function (master) {
            $http.get(master.object.url).success(function (lastCommit) {
                $scope.repo.lastCommit.date = new Date(lastCommit.author.date);
                $scope.repo.lastCommit.sha = lastCommit.sha;
                $scope.repo.lastCommit.url = lastCommit.html_url;
            });
        });
    }]);

})();
