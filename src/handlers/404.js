'use strict';

function handleNotFound(request, response) {
  console.log("not found handled");
  let output = {
    code: 404,
    error: 'Resource Not Found',
    message: `Cannot ${request.method} ${request.url}`
  };
  console.log(output);
  response.status(404).json(output);
}

module.exports = handleNotFound;