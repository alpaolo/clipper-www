angular.module('starter.controllers', [])

.controller('v1Ctrl',function ($scope, $rootScope) {

				})

.controller('v13Ctrl',function ($scope, $rootScope) {
	console.log("active slide: "+$rootScope.activeSlide);
	$scope.activeSlide=$rootScope.activeSlide;
				})

