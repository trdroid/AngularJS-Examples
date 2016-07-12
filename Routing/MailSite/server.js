var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8999, function() {
  console.log('Server is running ...');
});
