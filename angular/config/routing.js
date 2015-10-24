angular.module('profiles').config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "include/home/index.html"
        })
        .state('account', {
            url: "/account",
            templateUrl: "include/account/dashboard.html"
        })
        .state('account.login', {
            url: "/login",
            templateUrl: "include/account/login.html"
        })
        .state('help', {
            url: "/help",
            templateUrl: "include/help/index.html"
        })
        .state('credits', {
            url: "/credits",
            templateUrl: "include/credits/index.html"
        });
});
