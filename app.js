var InstagramAPI = require('instagram-api');
var accessToken = require('./_config.js').accessToken;

var instagramAPI = new InstagramAPI(accessToken);

// instagramAPI.userSelf()
//   .then(function(result) {
//     var userID = result.data.id;
//     instagramAPI.userMedia(userID)
//     .then(function(result) {
//       console.log(result);
//     });
//   });

instagramAPI.mediaSearch(48.4335645654, 2.345645645)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.log(err);
  });