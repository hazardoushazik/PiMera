var express = require('express'), 
    app     = express(), 
    server  = require('http').createServer(app), 
    path    = require('path'),
    io      = require('socket.io').listen(server),
    spawn   = require('child_process').spawn
    
    
// all environments
app.set('port', process.env.TEST_PORT || 8080);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html')
});

app.get('/remote', function (req, res) {
    res.sendfile(__dirname + '/public/remote.html')
});

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});