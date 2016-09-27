angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})
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
