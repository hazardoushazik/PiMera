var express        = require('express'), 
    static         = require('serve-static'),
    favicon        = require('serve-favicon'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    logger         = require('morgan'),
    app            = express(), 
    server         = require('http').createServer(app), 
    path           = require('path'),
    io             = require('socket.io').listen(server),
    spawn          = require('child_process').spawn
    
io.set('log level', 1);
    
// all environments
app.set('port', process.env.TEST_PORT || 8080);
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(static(path.join(__dirname, 'public')));

// routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

// io.sockets.on('connection', function (socket) {
//     // WebSocket Connection
// });