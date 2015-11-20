// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller: 'HomeCtrl'
        })

        .state('evaluate', {
            url: "/evaluate",
            templateUrl: "views/evaluate.html",
            controller: 'EvaluateCtrl'
        })

        .state('evaluate-report', {
            url: "/evaluate-report",
            templateUrl: "views/evaluate-report.html",
            controller: 'EvaluateReportCtrl'
        })

        .state('shop', {
            url: "/shop",
            templateUrl: "views/shop.html",
            controller: 'ShopCtrl'
        })

        .state('shop-detail', {
            url: "/shop-detail/:id",
            templateUrl: "views/shop-detail.html",
            controller: 'ShopDetailCtrl'
        })

        .state('shop-insurance', {
            url: "/shop-insurance",
            templateUrl: "views/shop-insurance.html",
            controller: 'ShopInsuranceCtrl'
        })

        .state('me-account', {
            url: "/me-account",
            templateUrl: "views/me-account.html",
            controller: 'MeAccountCtrl'
        })

        .state('me-address', {
            url: "/me-address",
            templateUrl: "views/me-address.html",
            controller: 'MeAddressCtrl'
        })

        .state('me-order', {
            url: "/me-order",
            templateUrl: "views/me-order.html",
            controller: 'MeOrderCtrl'
        })

        .state('me-coupons', {
            url: "/me-coupons",
            templateUrl: "views/me-coupons.html",
            controller: 'MeCouponsCtrl'
        })

        .state('me-express', {
            url: "/me-express",
            templateUrl: "views/me-express.html",
            controller: 'MeExpressCtrl'
        })

        .state('me-express-order', {
            url: "/me-express-order/:id",
            templateUrl: "views/me-express-order.html",
            controller: 'MeExpressOrderCtrl'
        })

        // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');

})
