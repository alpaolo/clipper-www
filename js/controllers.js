angular.module('starter.controllers', [])

.controller('v1Ctrl',function ($scope, $rootScope) {

})

.controller('v13Ctrl',function ($scope, $rootScope, $ionicSlideBoxDelegate) {
	console.log("active slide: "+$rootScope.activeSlide);
	$scope.activeSlide=$rootScope.activeSlide;
	 $ionicSlideBoxDelegate.update();
	 $scope.goSlide = function(toSlide) {
		    $ionicSlideBoxDelegate.slide(toSlide,1);
	}
})

