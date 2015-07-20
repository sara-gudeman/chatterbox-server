var requests = require('./requests');

module.exports = function(request, response) {
  
  var results;
  console.log('url request', request.url, 'method request', request.method);

  if (request.method === 'GET') {
    results = requests.respondToGetRequest(request);
  } 

  if (request.method === 'POST') {
    results = requests.respondToPostRequest(request);
  } 

  if (request.method === 'OPTIONS') {
    results = requests.respondToOptionsRequest(request);
  }

  // console.log("Serving request type " + request.method + " for url " + request.url);

  var statusCode = 200;

  var headers = defaultCorsHeaders;

  headers['Content-Type'] = "application/json";

  response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send

  results = JSON.stringify({'results': results});

  response.end(results);
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

