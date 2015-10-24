angular.module('profiles').config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "include/home/index.html",
            controller: 'HomeController'
        })
        .state('account_dashboard', {
            url: "/account/dashboard",
            templateUrl: "include/account/dashboard.html",
            controller: 'AccountDashboardController'
        })
        .state('account_login', {
            url: "/account/login",
            templateUrl: "include/account/login.html",
            controller: 'AccountLoginController'
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
