var NodeWebcam = require( "node-webcam" );

var opts = {
    width: 640,
    height: 480,
    quality: 50,
    delay: 0,
    saveShots: false,
    output: "jpeg",
    device: false,
    verbose: true,

    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: "base64",
};

var FSWebcam = NodeWebcam.FSWebcam;
var cam = new FSWebcam(opts);

cam.capture("test_picture", function( err, data ) {
    console.log(err, data);
} );

/* Webcam.list( function( list ) {
    var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
}); */


/* NodeWebcam.capture( "test_picture", opts, function( err, data ) {
    var image = "<img src='" + data + "'>";
}); */
