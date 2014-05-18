'use strict';

/* Services */
//var apiUrl = 'http://postacity.co.uk:8080/shine/mw';
var apiUrl = 'http://localhost:8080/shine/mw';


var spServices = angular.module('spServices', ['ngResource']);

spServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);


spServices.factory('Board', ['$resource',
   function($resource){
     return $resource(apiUrl+'/json/board/id/:boardId', {}, {
       query: {method:'GET', params:{boardId:'boards'}, isArray:false}
     });
   }]);

spServices.factory('Boards', ['$resource',
   function($resource){
     return $resource(apiUrl+'/json/boards', {}, {
       query: {method:'GET', params:{loc:'loc'}, isArray:true}
     });
   }]);

spServices.factory('Profile', ['$resource',
   function($resource){
     return $resource(apiUrl+'/json/user/:userId/profile', {}, {
       query: {method:'GET', params:{userId:'users'}, isArray:false}
     });
   }]);

spServices.factory('Post', ['$resource',
	 function($resource){
	   return $resource(apiUrl+'/json/post/:postId', {}, {
	     query: {method:'GET', params:{postId:'posts'}, isArray:false}
	   });
	 }]);
