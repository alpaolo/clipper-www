// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.directives','starter.controllers', 'ngCordova'])

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
	  if (document.images) {
			img1 = new Image();
			img2 = new Image();
			img3 = new Image();
			img4 = new Image();
			img5 = new Image();
			img6 = new Image();
			img7 = new Image();
			img8 = new Image();
			img9 = new Image();
			img10 = new Image();
			img11 = new Image();
			img12 = new Image();
			img13 = new Image();
			img14 = new Image();
			img15 = new Image();
			img16 = new Image();
			img17 = new Image();
			img18 = new Image();
			img19 = new Image();
			

			img1.src = "./img/Visual-1@x2.jpg";
			img2.src = "./img/Visual-2@x2.jpg";
			img3.src = "./img/Visual-3-popup1@x2.jpg";
			img4.src = "./img/Visual-4-popup2@x2.jpg";
			img5.src = "./img/Visual-5@x2.jpg";
			img6.src = "./img/Visual-6-popup@x2.jpg";
			img7.src = "./img/Visual-7@x2.jpg";
			img8.src = "./img/Visual-8@x2.jpg";
			img9.src = "./img/Visual-9@x2.jpg";
			img10.src = "./img/Visual-10popup@x2.jpg";
			img11.src = "./img/Visual-11@x2.jpg";
			img12.src = "./img/Visual-12@x2.jpg";
			img13.src = "./img/Visual-13@x2.jpg";
			img14.src = "./img/Visual-14@x2.jpg";
			img15.src = "./img/Visual-15@x2.jpg";
			img16.src = "./img/Visual-16-popup@x2.jpg";
			img17.src = "./img/Visual-17@x2.jpg";
			img18.src = "./img/Visual-18-popup@x2.jpg";
			img19.src = "./img/Visual-19@x2.jpg";
			img1.src = "./img/Visual-1.jpg";
			img2.src = "./img/Visual-2.jpg";
			img3.src = "./img/Visual-3-popup1.jpg";
			img4.src = "./img/Visual-4-popup2.jpg";
			img5.src = "./img/Visual-5.jpg";
			img6.src = "./img/Visual-6-popup.jpg";
			img7.src = "./img/Visual-7.jpg";
			img8.src = "./img/Visual-8.jpg";
			img9.src = "./img/Visual-9.jpg";
			img10.src = "./img/Visual-10-popup.jpg";
			img11.src = "./img/Visual-11.jpg";
			img12.src = "./img/Visual-12.jpg";
			img13.src = "./img/Visual-13.jpg";
			img14.src = "./img/Visual-14.jpg";
			img15.src = "./img/Visual-15.jpg";
			img16.src = "./img/Visual-16-popup.jpg";
			img17.src = "./img/Visual-17.jpg";
			img18.src = "./img/Visual-18-popup.jpg";
			img19.src = "./img/Visual-19.jpg";
			console.log("finish to load images");
			
		}
	  
	  
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
		  $stateProvider.state('visual-7a-popup', {
									  url: '/visual-7a-popup',
									  templateUrl: 'templates/visual-7a-popup.html'
									  })
		  $stateProvider.state('visual-7b-popup', {
									  url: '/visual-7b-popup',
									  templateUrl: 'templates/visual-7b-popup.html'
									  })
		   $stateProvider.state('visual-7c-popup', {
									  url: '/visual-7c-popup',
									  templateUrl: 'templates/visual-7c-popup.html'
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



