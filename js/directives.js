'use strict';

/*
 * LE VARIABILI STATICHE DOVREBBERO ESSERE GLOBALI
 */

/* Directives */


angular.module('starter.directives', [])

.directive('caInit', function($rootScope, $timeout, $window) {

				  // SIZE
				  $rootScope.winW=$window.innerWidth;
				  $rootScope.winH=$window.innerHeight;

				  //alert($rootScope.winW+" - "+$rootScope.winH);

				  var areaH=$rootScope.winH;
				  var areaW=areaH/3*4;
				  console.log(areaW+" areaW")
				  $rootScope.scaleFactor=1536/$rootScope.winH;  // Lo scale factor serve quando si apportano valori riferiti al file grafico 2048x1536
				  $rootScope.contentContainerH=areaH;
				  $rootScope.contentContainerW=areaW;
				  console.log("container "+$rootScope.contentContainerW);
				  $rootScope.marginLeft=($rootScope.winW-areaW)/2;
				  $rootScope.marginRight=$rootScope.marginLeft;
				  $rootScope.marginLeft=(($rootScope.winW-$rootScope.contentContainerW)/2); // margine calcolato rispetto alla grafica

				  var scaleFactor=$rootScope.scaleFactor;
				  $rootScope.videoW=1672; // finestra video
				  $rootScope.defaultRowSafeWidth= 1460 // 1460: lunghezza dell'area utile da cui è già stato sottratto il margine
				  $rootScope.defaultLeftPos = 180; //   160: posizione di allineamento alla grafica


				  // LIMITI
				  if($rootScope.winH < 400 )$rootScope.defaultHlimit = 10; // limite minimo altezza riga
				  else if($rootScope.winH > 400 && $rootScope.winH < 800 ) $rootScope.defaultHlimit = 30;
				  else if($rootScope.winH > 800 ) $rootScope.defaultHlimit = 40;
				  if($rootScope.winH < 400 )$rootScope.defaultHSelectionLimit = 10; // limite minimo altezza riga
				  else if($rootScope.winH > 400 && $rootScope.winH < 800 ) $rootScope.defaultHSelectionLimit = 30;
				  else if($rootScope.winH > 800 ) $rootScope.defaultHSelectionLimit = 40;
				  
				  
				  function link(scope, element, attrs) {
					  element.css('width',$rootScope.winW);
					  element.css('height',$rootScope.winH);

				  }
				  return {
				  link : link
			  };
			  })
.directive('caVisual', function($rootScope, $timeout) {
				  function link(scope, element, attrs) {
					  var scaleFactor = $rootScope.scaleFactor;
					  element.css('height',$rootScope.winH+'px');
					  var width=$rootScope.winH/3*4;
					  element.css('width',+width+'px');
				  }
				  return {
				  link : link
				  };
			  })
			  
			  
.directive('caButton', function($rootScope, $timeout) {
				  function link(scope, element, attrs) {
					  var scaleFactor = $rootScope.scaleFactor;
					  var marginLeft = $rootScope.marginLeft;
					  var elementH=Math.floor(parseInt(element.css('height'))/scaleFactor);
					  var elementW=Math.floor(parseInt(element.css('width'))/scaleFactor);
					  var elementT=Math.floor(parseInt(element.css('top'))/scaleFactor);
					  var elementL=Math.floor(parseInt(element.css('left'))/scaleFactor);
					  element.css('height', elementH+'px');
					  element.css('width',  elementW+'px');
					  element.css('top',  elementT+'px');
					  element.css('left',  elementL+'px');
				  }

				  return {
				  link : link
				  };
			  })





