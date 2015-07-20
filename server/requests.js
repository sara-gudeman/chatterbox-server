var database = require('./database');

module.exports.respondToGetRequest = function(request) {
  return database.users;
};


module.exports.respondToPostRequest = function() {
  console.log('responding post request');
};



module.exports.respondToOptionsRequest = function(request) {
  console.log('received options request');
};

