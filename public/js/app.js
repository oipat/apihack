"use strict";
// App.js

var hackathonApp = angular.module('hackathonApp', [
	'ngRoute',
	'hackathonControllers',
	"ngTouch",
  	"mobile-angular-ui"
	]);


hackathonApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/main', {
		templateUrl: 	"partials/main.html",
		controller: 	"mainCtrl",
	})
	.otherwise({
		templateUrl: 	"partials/main.html",
		controller: 	"mainCtrl",
	});
}]);



