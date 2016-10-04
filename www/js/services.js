angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})



.factory('Posts', function($q, $http) {
  var posts = [
      {
          id: 0,
          user: {
              id: 1,
              username: "dtrump",
              profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg"
          },
          image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
          imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
          likes: 892,
          caption: "Always winning #elections",
          tags: ['elections'],
          comments: [
              {
                  id: 0,
                  user: {
                      id: 2,
                      username: "POTUS"
                  },
                  comment: "You're never going to make it don #losing",
                  userRefs: [],
                  tags: ["losing"]
              },
              {
                  id: 1,
                  user: {
                      id: 3,
                      username: "HillaryC"
                  },
                  comment: "Damn right @POTUS",
                  userRefs: ["POTUS"],
                  tags: []
              },
          ]

      },
      {
          id: 1,
          user: {
              id: 1,
              username: "dtrump",
              profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg"
          },
          image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
          imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
          likes: 1,
          caption: "Always lost #elections",
          tags: ['elections'],
          comments: [
              {
                  id: 0,
                  user: {
                      id: 3,
                      username: "HillaryC"
                  },
                  comment: "Right",
                  userRefs: [],
                  tags: []
              }
          ]
      }
  ];
  return {
    all: function() {
      // return promise
      return $q(function(resolve, reject){
          $http.get('https://khuongstagram.herokuapp.com/posts').then(function(response){
              // do something with the response if necessary
              // here the response body (which contains the JSON data we are interested in) is returned
              resolve(response.data);
          });
      })
    },
    share: function(newdata){
      return $q(function(resolve, reject){
          $http.get('https://khuongstagram.herokuapp.com/posts').then(function(response){
              // do something with the response if necessary
              // here the response body (which contains the JSON data we are interested in) is returned
              resolve(response.data);

          });
      })
    },
    get: function (postID) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].id === parseInt(postID)) {
                    return posts[i];
                }
            }
        }
  };
})

.factory('Mosts', function ($q) {
    var posts = [
        {
            id: 0,
            user: {
                id: 1,
                username: "dtrump",
                profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg"
            },
            image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
            imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
            likes: 892,
            caption: "Always winning #elections",
            tags: ['elections'],
            comments: [
                {
                    id: 0,
                    user: {
                        id: 2,
                        username: "POTUS"
                    },
                    comment: "You're never going to make it don #losing",
                    userRefs: [],
                    tags: ["losing"]
                },
                {
                    id: 1,
                    user: {
                        id: 3,
                        username: "HillaryC"
                    },
                    comment: "Damn right @POTUS",
                    userRefs: ["POTUS"],
                    tags: []
                },
            ]

        },
        {
            id: 1,
            user: {
                id: 1,
                username: "dtrump",
                profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg"
            },
            image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
            imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
            likes: 1,
            caption: "Always lost #elections",
            tags: ['elections'],
            comments: [
                {
                    id: 0,
                    user: {
                        id: 3,
                        username: "HillaryC"
                    },
                    comment: "Right",
                    userRefs: [],
                    tags: []
                }
            ]
        }
    ]

    return {
        all: function() {
            return posts;
        },
        add: function(newData) {
            posts.push(newData);
        },
        // posts from myself and the from the users i am following
        following: function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        },
        // most recent posts
        recent: function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        },
        // search posts based on tags
        searchTag: function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        },
        //get all comments in a post
        get: function (postID) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].id === parseInt(postID)) {
                    return posts[i];
                }
            }
        },
        // get all posts of single user
        getUserPosts: function (userId) {
            return $q(function (resolve, reject) {

                // execute the search and return results

                resolve(posts); // placeholder
            });
        }
    };
});
