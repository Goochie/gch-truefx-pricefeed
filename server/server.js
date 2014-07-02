/**
 * Author : Bill Gooch
 * Socket server example
 *
 */
// modules =================================================
var express = require('express');
var app     = express();
//---------------------
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var http           = require('http');
var io             = require('socket.io');

// configuration ===========================================
var port = process.env.PORT || 8020; // set our port

app.use(express.static(__dirname + './../client'));
app.use(require('connect-logger')());
app.use(bodyParser());
app.use(methodOverride('X-HTTP-Method-Override'));

//==============================================================================
// start app
// =============================================================================

//:::::::: Create HTTP server
var server = http.createServer(app);
server.listen(port, function(){
    console.log('Express server listening on port ' + port);
});

//:::::::: Create fx price server
var trueFXConfig = {
    userName:'userName',
    password:'Password',
    curPairs : 'EUR/CAD,GBP/USD,EUR/JPY,GBP/JPY,GBP/CAD,EUR/AUD',
    trueFXID : 'trueFXID'
};

io = io.listen(server);
require('./sockets/fxprice-srv')(io,trueFXConfig);

exports = module.exports = app;
