(function () {
    'use strict';

    angular.module('profiles').value('API', {
        'base': 'http://localhost/api',
        'github': {
            'repo': 'https://api.github.com/repos/cegekaro/profiles/git/refs/heads/master'
        },
        'account': {
            'login': '/account/login'
        }
    });

})();
