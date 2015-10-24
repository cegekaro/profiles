(function () {
    'use strict';

    angular.module('profiles').controller('AppController', ['$scope', 'Sidebar', function ($scope, Sidebar) {
        $scope.Sidebar = Sidebar;
    }]);

})();
