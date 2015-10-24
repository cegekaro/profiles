(function () {
    'use strict';

    angular.module('profiles').controller('AccountLoginController', ['$scope', '$http', 'API', 'LxNotificationService', function ($scope, $http, API, LxNotificationService) {
        $scope.accountLogin = {
            loginUsername: '',
            loginPassword: ''
        };

        $scope.apiAuthentication = function (username, password) {
            $http.post(API.base + API.account.login, {
                username: username,
                password: password
            }).then(
                function (successData) {
                    LxNotificationService.success('Authentication successful, redirecting to account dashboard.');
                }, function (rejectData) {
                    if (400 == rejectData.status) {
                        LxNotificationService.error('Your authentication details are not correct.');
                    } else {
                        LxNotificationService.error('Connectivity with the backend server lost.');
                    }
                }
            );
        }
    }]);

})();
