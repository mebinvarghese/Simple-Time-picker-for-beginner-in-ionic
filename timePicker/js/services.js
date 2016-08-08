var srv = angular.module('starter.services', []);

srv.service('WebService', function($q,$http) {
    return {
        invokeService: function(from,method,url,data) {			
            var deferred = $q.defer();
            var promise = deferred.promise; 	         
			$http({
			  method  : method,
			  url     : url,
			  data	  : data,
			  headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data) {			  
			    deferred.resolve(data);
			})
			.error(function() {	
			    deferred.reject('Something Wnet Wrong');
			});
			
			promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }        
            return promise;
        }
    }
})
srv.factory('myappfactory', function($q, $window) {
	//'geolocationSvc', ['$q', '$window', function ($q, $window)
    'use strict';
	 var factory = {}; 
	 
     factory.getCurrentPosition = function() {
		 
        var deferred = $q.defer();

        if (!$window.navigator.geolocation) {
            deferred.reject('Geolocation not supported.');
        } else {
            $window.navigator.geolocation.getCurrentPosition(
                function (position) {
                    deferred.resolve(position);
                },
                function (err) {
                    deferred.reject(err);
                });
        }

        return deferred.promise;
    }
	/*return {
        getCurrentPosition: getCurrentPosition
    };*/
	return factory;
    
});
