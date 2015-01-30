angular
        .module('starter.controllers', [])

        .controller('MainCtrl', function ($scope,$rootScope, $state ,  $timeout, $element, $location, $animate, $cordovaSplashscreen /* ,createDialog*/) {

				$rootScope.imageSuffix="@x2";
	 			if(window.devicePixelRatio===2){$rootScope.retina=true;$rootScope.imageSuffix="@x2";}
	 			else {$rootScope.retina=false;$rootScope.imageSuffix="@x1";}
	
				$rootScope.switchPage = function (path,slide) {
					if(slide==null)slide=0;
					$rootScope.activeSlide=slide;
					$rootScope.template = path.replace(/\//g,'');
					console.log("path: "+$rootScope.template);
					$rootScope.isRoot=true;
					
					$location.path("/");
					$location.path(path);
				};

				$rootScope.changePage = function (path,type) {
					$rootScope.isRoot=true;
					$scope.animationClass=type;
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
				
				$rootScope.openPDF = function (url) {
                	console.log("open pdf: "+url)
	                ref = window
	                        .open(
	                                url,
	                                '_blank', 'location=yes');
	                ref.addEventListener('exit', function() {
		                ref.removeEventListener('exit', function() {
		                });
		                ref.close();
	                });
                }
			})
        
        
        .controller('v1Ctrl', function($scope, $rootScope) {

        })

        .controller(
                'v13Ctrl',
                function($scope, $rootScope, $ionicSlideBoxDelegate) {
	                console.log("active slide: " + $rootScope.activeSlide);
	                console.log("suf: " + $rootScope.imageSuffix);
	                $scope.activeSlide = $rootScope.activeSlide;
	                $ionicSlideBoxDelegate.update();
	                $scope.goSlide = function(toSlide) {
		                $ionicSlideBoxDelegate.slide(toSlide, 1);
	                }
	                $scope.goSlide = function(toSlide) {
		                $ionicSlideBoxDelegate.slide(toSlide, 1);
	                }
	                

                })
