'use strict';

/* Controllers */
var spControllers = angular.module('spControllers', []);

spControllers.controller('MapCtrl', ['$scope', '$routeParams', 'Boards',
  function($scope, $routeParams, Boards) {
    $scope.boards = Boards.query({loc: $routeParams.loc});
    $scope.orderProp = 'id';

  }]);

spControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

spControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);


spControllers.controller('BoardDetailCtrl', ['$scope', '$routeParams', 'Board',
  function($scope, $routeParams, Board) {
    $scope.board = Board.get({boardId: $routeParams.boardId}, function(board) {
    });
  }]);

spControllers.controller('ProfileDetailCtrl', ['$scope', '$routeParams', 'Profile',
   function($scope, $routeParams, Profile) {
     $scope.profile = Profile.get({userId: $routeParams.userId}, function(profile) {
    	 if(profile.hasIcon){
    		 $scope.imgUrl ='http://localhost:8080/shine/images/user/'+profile.id+'.png';
    	 }else{
    		 $scope.imgUrl ='http://localhost/here/static/images/blank-profile.png';
    	 }

     });
   }]);

spControllers.controller('PostDetailCtrl', ['$scope', '$routeParams','$http', 'Post',
     function($scope, $routeParams, $http, Post) {
	   var that = $scope;

			$scope.post = Post.get({postId: $routeParams.postId}, function(post) {
    	   $scope.fun = 'ha ha';
      	 if(post.imageUrl){
    		 $scope.imgUrl = 'http://localhost:8080/shine/images/notice/'+post.imageUrl;
    	 }else{
    		 $scope.imgUrl = null;
    	 }
       });
       
       $scope.reply = function(){

   	   
    	   var reply = {
    			    reply: $scope.reply.reply,
    			    noticeId: $scope.post.id
    	   };
    	   
    	   $http(
    			   {method: 'POST',
    				   url: '/shine/mw/json/reply/new',
    				   data:reply,
    				   headers: {'token':'Ef-IAY6MjJf-q0c1hmooVHRpj7S4bCK97'}
    			 }
    		)
    		.success(function(data, status, headers, config) {
    			console.log(data);
    			$scope.addReply(data);
     	    }).
    	    error(function(data, status, headers, config) {
    	    	alert("failed");
    	    });
    	   
    	   
       }
       
       $scope.addReply = function(data){
	    	   alert("replied" +data);
	    	   this.post.repliesCount += 1;
	    	   this.post.replies.push(data);
       }
       
       $scope.play = function(){
    	   
    	   var newreply = {
   			    reply: 'from play',
   			    noticeId: $scope.post.id,
   			    author: 'anAuthor',
   			    created: new Date()	
    	   };
    	   
    	   alert('play');

    	   $scope.addReply(newreply);
       }
              
     }]);


spControllers.controller('LoginCtrl', ['$scope', '$http',
        function($scope, $http) {

          $scope.login = function(){

      	   
       	   var reply = {
       			    reply: $scope.reply.reply,
       			    noticeId: $scope.post.id
       	   };
       	   
       	   $http(
       			   {method: 'POST',
       				   url: '/shine/mw/json/reply/new',
       				   data:reply
       			 }
       		)
       		.success(function(data, status, headers, config) {
       			console.log(data);
       			$scope.addReply(data);
        	    }).
       	    error(function(data, status, headers, config) {
       	    	alert("failed");
       	    });
       	   
       	   
          }
          
          $scope.addReply = function(data){
   	    	   alert("replied" +data);
   	    	   this.post.repliesCount += 1;
   	    	   this.post.replies.push(data);
          }
          
          $scope.play = function(){
       	   
       	   var newreply = {
      			    reply: 'from play',
      			    noticeId: $scope.post.id,
      			    author: 'anAuthor',
      			    created: new Date()	
       	   };
       	   
       	   alert('play');

       	   $scope.addReply(newreply);
          }
                 
        }]);

