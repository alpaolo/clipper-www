// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.directives','starter.controllers'])

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

		  $stateProvider.state('v1', {
									  url: '/',
									  templateUrl: 'templates/visual-1.html'
									  })
		  $stateProvider.state('v2', {
									 url: '/v2',
									 templateUrl: 'templates/visual-2.html'
									 })
		  $stateProvider.state('v3', {
									  url: '/v3',
									  templateUrl: 'templates/visual-3-popup1.html'
									  })
		  $stateProvider.state('v4', {
									  url: '/v4',
									  templateUrl: 'templates/visual-4-popup2.html'
									  })
		  $stateProvider.state('v5', {
									  url: '/v5',
									  templateUrl: 'templates/visual-5.html'
									  })
		  $stateProvider.state('v6', {
									  url: '/v6',
									  templateUrl: 'templates/visual-6-popup.html'
									  })
		  $stateProvider.state('v7', {
									  url: '/v7',
									  templateUrl: 'templates/visual-7.html'
									  })
		  $stateProvider.state('v8', {
									  url: '/v8',
									  templateUrl: 'templates/visual-8.html'
									  })
		  $stateProvider.state('v9', {
									  url: '/v9',
									  templateUrl: 'templates/visual-9.html'
									  })
		  $stateProvider.state('v10', {
									  url: '/v10',
									  templateUrl: 'templates/visual-10-popup.html'
									  })
		  $stateProvider.state('v11', {
									  url: '/v11',
									  templateUrl: 'templates/visual-11.html'
									  })
		  $stateProvider.state('v12', {
									  url: '/v12',
									  templateUrl: 'templates/visual-12.html'
									  })
		  $stateProvider.state('v13', {
										url: '/v13',
										templateUrl: 'templates/visual-13.html'
										})
		  $stateProvider.state('v14', {
									  url: '/v14',
									  templateUrl: 'templates/visual-14.html'
									  })
		  $stateProvider.state('v15', {
									  url: '/v15',
									  templateUrl: 'templates/visual-15.html'
									  })
		  $stateProvider.state('v16', {
									  url: '/v16',
									  templateUrl: 'templates/visual-16-popup.html'
									  })
		  $stateProvider.state('v18', {
									  url: '/v18',
									  templateUrl: 'templates/visual-18-popup.html'
									  })
		  $stateProvider.state('v19', {
									  url: '/v19',
									  templateUrl: 'templates/visual-19.html'
									  })
			$urlRouterProvider.otherwise('/');
		  })

.controller('MainCtrl', function ($scope,$rootScope, $state , $timeout, $element, $location, $animate /* ,createDialog*/) {

				$rootScope.switchPage = function (path) {
				console.log("switch");
					$rootScope.isRoot=true;
					$location.path(path);
				};

				$rootScope.changePage = function (path,type) {
					$rootScope.isRoot=true;
					$scope.animationClass=type;
					console.log('class: '+type)
					$location.path(path);
				};

				$rootScope.historyBack = function(type) {
					console.log("history back");
					//resetScore();
					$scope.animationClass=type;
					$rootScope.isBack = true;
					$scope.direction='reverse';
					window.history.back();
				};

			});

