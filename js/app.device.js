/* Handling the back-button.
 * @return NO
 */
function onBackbutton() {
    // check if we are at homepage or not.
    if($('.apiDiv#apiHome').css('display') == 'block') {
        // Turn off the app.
        navigator.app.exitApp();
    } else {    
        // Go to the homepage.
        $('.apiDiv').hide();
        $('.apiDiv#apiHome').show();
        $.mobile.silentScroll(0);
    }
}

/* Handling the menu-button.
 * @return NO
 */
function onMenubutton() {
    // Check if the menu is active.
    if($('h3').hasClass('ui-collapsible-heading-collapsed')) {
        // Activate the menu.
        $('div.ui-collapsible').trigger("expand");
    } else {
        // Hide the menu.
        $('div.ui-collapsible').trigger("collapse");
    }
}

/* Handling the search-button.
 * @return NO
 */
function onSearchkey() {
    console.log("search event fired");
    alert("You can not search in this app.");
};
	
/* Logging event handler
 * @return NO
 */
function onEventFired() {  
    console.log("an event fired");
};

// Call this function when the device is ready.
var onDeviceReady = function() {
    // Load and print information of the device at homepage.
    document.getElementById("name").innerHTML = device.name;
    document.getElementById("pgversion").innerHTML = device.cordova;
    document.getElementById("platform").innerHTML = device.platform;
    document.getElementById("version").innerHTML = device.version;
    document.getElementById("uuid").innerHTML = device.uuid;
    document.getElementById("width").innerHTML = screen.width;
    document.getElementById("height").innerHTML = screen.height;
    document.getElementById("availwidth").innerHTML = screen.availWidth;
    document.getElementById("availheight").innerHTML = screen.availHeight;
    document.getElementById("colorDepth").innerHTML = screen.colorDepth;  
    // Handler buttons.
    document.addEventListener("searchbutton", onSearchkey, false);   
    document.addEventListener("menubutton", onMenubutton, false);
    document.addEventListener("backbutton", onBackbutton, false);
    // Handler outher events.
    document.addEventListener("pause", onEventFired, false);
    document.addEventListener("resume", onEventFired, false);
    document.addEventListener("online", onEventFired, false);
    document.addEventListener("offline", onEventFired, false);
    document.addEventListener("batterycritical", onEventFired, false);
    document.addEventListener("batterylow", onEventFired, false);
    document.addEventListener("batterystatus", onEventFired, false);
    document.addEventListener("startcallbutton", onEventFired, false);
    document.addEventListener("endcallbutton", onEventFired, false);
    document.addEventListener("volumedownbutton", onEventFired, false);
    document.addEventListener("volumeupbutton", onEventFired, false);
    
    // Load Photo URI for apiCamera.
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
    
};

/* Called when body is load.
 * @return NO
 */
function init() {
    document.addEventListener("deviceready", onDeviceReady, true);
}
