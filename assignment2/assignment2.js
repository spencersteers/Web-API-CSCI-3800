// Created by Spencer Steers
// February 23 2015

var http = require('http');
var url = require('url');

// Allowed methods for each urn
var requestRequirements = [
  {urn: '/gets', method: 'GET'},
  {urn: '/posts', method: 'POST'},
  {urn: '/puts', method: 'PUT'},
  {urn: '/deletes', method: 'DELETE'}
]

// Check if urn and method match
function isValidRequest(urn, method) {
  var isValid = false;
  requestRequirements.some(function(requirement) {
    isValid = (requirement.urn === urn && requirement.method === method);
    return isValid;
  });
  return isValid;
}

// If the request is invalid write this response
function sendInvalidResponse(res, status) {
  status = status || 400;
  var error = {message: 'unsupported method'};
  res.writeHead(status, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(error));
}

// If the request is valid write the headers and query params
function sendValidResponse(res, req) {
  var reqUrl = url.parse(req.url, true);

  var response = {requestHeaders: req.headers, queryParams: reqUrl.query};

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(response));
}


// Start
http.createServer(function (req, res) {

  var reqUrl = url.parse(req.url);

  if (!isValidRequest(reqUrl.pathname, req.method)) {
    var httpStatus = reqUrl.pathname === '/' ? 400 : 405;
    sendInvalidResponse(res, httpStatus);
  }

  sendValidResponse(res, req);

}).listen(9000, function() {
  console.log('The server is listening on port 9000');
});
