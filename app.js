var InstagramAPI = require('instagram-api');
var accessToken = require('./_config.js').accessToken;

var instagramAPI = new InstagramAPI(accessToken);

instagramAPI.userSelf()
  .then(function(result) {
    var userID = result.data.id;
    instagramAPI.userMedia(userID)
    .then(function(result) {
      console.log(result);
    });
  });