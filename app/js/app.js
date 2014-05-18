'use strict';

/* App Module */

var spApp = angular.module('sp-spa', [
  'ngRoute',
  'phonecatAnimations',
  'spControllers',
  'phonecatFilters',
  'spServices'
]);

spApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/board/:boardId', {
        templateUrl: 'partials/board-detail.html',
        controller: 'BoardDetailCtrl'
      }).
      when('/profile/:userId', {
          templateUrl: 'partials/profile-detail.html',
          controller: 'ProfileDetailCtrl'
    }).
    when('/post/:postId', {
        templateUrl: 'partials/post-detail.html',
        controller: 'PostDetailCtrl'
      }).
      when('/map', {
          templateUrl: 'partials/map.html',
          controller: 'MapCtrl'
        }).
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
          }).
      otherwise({
        redirectTo: '/map'
      });
  }]);
