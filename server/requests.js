var database = require('./database');

module.exports.respondToGetRequest = function(request) {
  if (request.url === '/users') {
    return database.messages;
  }  

  if (request.url === '/rooms') {
    console.log(request.url);
    return database.messages;
  }

  if (request.url === '/messages') {
    return database.messages;
  }
};


module.exports.respondToPostRequest = function() {
  console.log('responding post request');
};



module.exports.respondToOptionsRequest = function(request) {
  console.log('received options request');
};

