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

		  $stateProvider.state('visual-1', {
									  url: '/',
									  templateUrl: 'templates/visual-1.html'
									  })
		  $stateProvider.state('visual-2', {
									 url: '/visual-2',
									 templateUrl: 'templates/visual-2.html'
									 })
		  $stateProvider.state('visual-3-popup1', {
									  url: '/visual-3-popup1',
									  templateUrl: 'templates/visual-3-popup1.html'
									  })
		  $stateProvider.state('visual-4-popup2', {
									  url: '/visual-4-popup2',
									  templateUrl: 'templates/visual-4-popup2.html'
									  })
		  $stateProvider.state('visual-5', {
									  url: '/visual-5',
									  templateUrl: 'templates/visual-5.html'
									  })
		  $stateProvider.state('visual-6-popup', {
									  url: '/visual-6-popup',
									  templateUrl: 'templates/visual-6-popup.html'
									  })
		  $stateProvider.state('visual-7', {
									  url: '/visual-7',
									  templateUrl: 'templates/visual-7.html'
									  })
		  $stateProvider.state('visual-8', {
									  url: '/visual-8',
									  templateUrl: 'templates/visual-8.html'
									  })
		  $stateProvider.state('visual-9', {
									  url: '/visual-9',
									  templateUrl: 'templates/visual-9.html'
									  })
		  $stateProvider.state('visual-10-popup', {
									  url: '/visual-10-popup',
									  templateUrl: 'templates/visual-10-popup.html'
									  })
		  $stateProvider.state('visual-11', {
									  url: '/visual-11',
									  templateUrl: 'templates/visual-11.html'
									  })
		  $stateProvider.state('visual-12', {
									  url: '/visual-12',
									  templateUrl: 'templates/visual-12.html'
									  })
		  $stateProvider.state('visual-13', {
										url: '/visual-13',
										templateUrl: 'templates/visual-13.html'
										})
		  $stateProvider.state('visual-14', {
									  url: '/visual-14',
									  templateUrl: 'templates/visual-14.html'
									  })
		  $stateProvider.state('visual-15', {
									  url: '/visual-15',
									  templateUrl: 'templates/visual-15.html'
									  })
		  $stateProvider.state('visual-16-popup', {
									  url: '/visual-16-popup',
									  templateUrl: 'templates/visual-16-popup.html'
									  })
		  $stateProvider.state('visual-17', {
									  url: '/visual-17',
									  templateUrl: 'templates/visual-17.html'
									  })
		  $stateProvider.state('visual-18-popup', {
									  url: '/visual-18-popup',
									  templateUrl: 'templates/visual-18-popup.html'
									  })
		  $stateProvider.state('visual-19', {
									  url: '/visual-19',
									  templateUrl: 'templates/visual-19.html'
									  })
			$urlRouterProvider.otherwise('/');
		  })

.controller('MainCtrl', function ($scope,$rootScope, $state ,  $timeout, $element, $location, $animate /* ,createDialog*/) {

				$rootScope.switchPage = function (path,slide) {
				slide = typeof a !== 'undefined' ? slide : 0;
				slide=5;
				$rootScope.activeSlide=5;
				$rootScope.template = path.replace(/\//g,'');
				console.log("path: "+$rootScope.template);
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

				//$rootScope.templateName=$stateProvider.state['templateUrl'];


			});

