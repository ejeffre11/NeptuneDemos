jQuery.sap.require("sap.m.MessageBox");
var signaturePad;

// Custom Init - Happens only once
sap.ui.getCore().attachInit(function(data) {

    // data = startParameters from NAM Action settings on the tile
    // Do your Stuff

    // Some stuff needs to be timed later. Run them inside a timeout
    setTimeout(function() {
        
    }, 200);

});
// Only for View - Custom beforeDisplay - Trigger everytime the view is started
if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function() {
    var canvas = document.getElementById('signature-pad');
    signaturePad = new SignaturePad(canvas);
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = 1024;
    canvas.height = 400;
    });
}