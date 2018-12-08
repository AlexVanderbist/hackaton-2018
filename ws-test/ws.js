/**
 * Websocket server app
 *
 * Will use base64 return to the websocket clients and
 * in memory capturing without saving
 *
 */
"use strict";

var port = 9090;
var HTTP = require( "http" );
var FS = require( "fs" );
var HTML_CONTENT = FS.readFileSync( __dirname + "/index.html" );
var WS = require( "ws" );
var WSS = new WS.Server({ port: 9091 });

// Broadcast to all.
WSS.broadcast = function broadcast(data) {
    WSS.clients.forEach(function each(client) {
        /* if (client.readyState === WS.OPEN) { */
            client.send(data);
        /* } */
    });
};

/* var opts = {
    width: 1280,
    height: 720,
    quality: 100,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    verbose: true,

    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: "base64",
}; */

var NodeWebcam = require('node-webcam');
var FSWebcam = NodeWebcam.FSWebcam;
var Webcam = new FSWebcam({
    callbackReturn: "base64",
    saveShots: false
});

// Main
init();

function init() {
    setupHTTP();
    setupWebcam();
    console.log( "Visit localhost:9090" );
}

function setupHTTP() {
    var server = HTTP.createServer();
    server.on( "request", function( request, response ) {
        response.write( HTML_CONTENT );
        response.end();
    });
    server.listen( port );
}

function setupWebcam() {
    function capture() {
        Webcam.capture( "picture", function( err, data ) {
            if( err ) {
                throw err;
            }
            console.log(data);

            WSS.broadcast( data );
            setTimeout( capture, 25 );
        });
    }
    capture();
}
