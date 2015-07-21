// var messages = require('./database.js');
var messages = [{ username: 'sara', text: 'node, mon!', room: 'nodeModules', date: 'Mon Jul 20 2015 16:35:34 GMT-0700 (PDT)'}, { username: 'eliot', text: 'no, demon', room: 'nodeModules'}];
exports = module.exports = {};

var requestHandler = function(request, response) {  
  var results;
  var statusCode;

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "application/json";
  results = JSON.stringify({'results': messages});
  
  console.log('url request', request.url, 'method request', request.method);

  if (request.method === 'GET') {
    if (request.url.indexOf('/classes') === -1) {
      statusCode = 404;
      results = JSON.stringify({results: messages});
      response.writeHead(statusCode, headers);
      response.end(results);  
    }

    statusCode = 200;
    results = JSON.stringify({results: messages});
    response.writeHead(statusCode, headers);
    response.end(results);
  }
  
  // if request.url does not exist
  // return 404
  
  if (request.method === 'OPTIONS') {
    statusCode = 200;
    response.writeHead(statusCode, headers);
    response.end(results);

  }

  if (request.method === 'POST') {
    statusCode = 201;

    request.on('data', function(data){
      messages.unshift(JSON.parse(data.toString()));
      console.log(data.toString());
      response.writeHead(statusCode, headers);
      response.end(results);
    });

    // messages.push({username: 'request' /* username */, message: /* message */ null});
  }

  // console.log("Serving request type " + request.method + " for url " + request.url);


};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.requestHandler = requestHandler;
