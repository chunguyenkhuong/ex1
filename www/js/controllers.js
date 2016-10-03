angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicActionSheet, Posts) {

 Posts.share().then(function(data)
    {
      $scope.posts = data;
      $scope.posts.push({
          "id":0,
          "user":{
             "id":1,
             "username":"Khuong",
             "profileImages":"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4"
          },
          "image":"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4",
          "imageThumb":"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4",
          "likes":130,
          "comments":[
             {
                "id":0,
                "user":{
                   "id":2,
                   "username":"Adam"
                },
                "comment":"Congratulation",
                "userRefs":[

                ]
             },
             {
                "id":1,
                "user":{
                   "id":3,
                   "username":"Sebastian"
                },
                "comment":"lol",
                "userRefs":[
                   "Adam"
                ]
             }
          ]
       });

    }
  );
})

.controller('LoveCtrl', function($scope) {})
.controller('FollowingCtrl', function($scope) {})
.controller('YouCtrl', function($scope) {})
.controller('SearchCtrl', function($scope) {})
.controller('SearchbuttonCtrl', function($scope) {})
.controller('TopsearchCtrl', function($scope) {})
.controller('PeoplesearchCtrl', function($scope) {})
.controller('TagssearchCtrl', function($scope) {})
.controller('PlacessearchCtrl', function($scope) {})
.controller('Postone_accountCtrl', function($scope) {})
.controller('Map_accountCtrl', function($scope) {})
.controller('Picture_accountCtrl', function($scope) {})
.controller('More_accountCtrl', function($scope) {})


.controller('CameraCtrl', function($scope, $cordovaCamera) {
  $scope.takePicture = function() {
    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	    correctOrientation:true
    };
    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.image = imageData;

    }, function(err) {
      // error
    });
  };

  $scope.choosePicture = function() {
    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };
    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.image = imageData;

    }, function(err) {
      // error
    });
  };




})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
