var NodeWebcam = require( "node-webcam" );

var FSWebcam = NodeWebcam.FSWebcam;

var opts = {
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
    callbackReturn: "location",
};

var Webcam = FSWebcam.create( opts );
Webcam.capture("test_picture", function( err, data ) {
    console.log(err, data);
} );

/* Webcam.list( function( list ) {
    var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
}); */


/* NodeWebcam.capture( "test_picture", opts, function( err, data ) {
    var image = "<img src='" + data + "'>";
}); */
