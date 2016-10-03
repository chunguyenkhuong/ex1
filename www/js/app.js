// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style('standard');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

 // home/chats
  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('tab.searchbutton', {
    url: '/searchbutton',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-searchbutton.html',
        controller: 'SearchbuttonCtrl'
      }
    }
  })

  // .state('tab.topsearch', {
  //   url: '/topsearch',
  //   views: {
  //     'tab-search': {
  //       templateUrl: 'templates/tab-topsearch.html',
  //       controller: 'TopsearchCtrl'
  //     }
  //   }
  // })

  .state('tab.peoplesearch', {
    url: '/peoplesearch',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-peoplesearch.html',
        controller: 'PeoplesearchCtrl'
      }
    }
  })

  .state('tab.tagssearch', {
    url: '/tagssearch',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-tagssearch.html',
        controller: 'TagssearchCtrl'
      }
    }
  })

  .state('tab.placessearch', {
    url: '/placessearch',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-placessearch.html',
        controller: 'PlacessearchCtrl'
      }
    }
  })

  .state('tab.camera', {
      url: '/camera',
      views: {
        'tab-camera': {
          templateUrl: 'templates/tab-camera.html',
          controller: 'CameraCtrl'
        }
      }
    })

  .state('tab.love', {
      url: '/love',
      views: {
        'tab-love': {
          templateUrl: 'templates/tab-love.html',
          controller: 'LoveCtrl'
        }
      }
    })

    .state('tab.following', {
        url: '/following',
        views: {
          'tab-love': {
            templateUrl: 'templates/tab-following.html',
            controller: 'FollowingCtrl'
          }
        }
      })

      .state('tab.you', {
          url: '/you',
          views: {
            'tab-love': {
              templateUrl: 'templates/tab-you.html',
              controller: 'YouCtrl'
            }
          }
        })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.postone_account', {
    url: '/postone_account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-postone_account.html',
        controller: 'Postone_accountCtrl'
      }
    }
  })

  .state('tab.map_account', {
    url: '/map_account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-map_account.html',
        controller: 'Map_accountCtrl'
      }
    }
  })

  .state('tab.picture_account', {
    url: '/picture_account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-picture_account.html',
        controller: 'Picture_accountCtrl'
      }
    }
  })

  .state('tab.more_account', {
    url: '/more_account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-more_account.html',
        controller: 'More_accountCtrl'
      }
    }
  })



  ;



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
