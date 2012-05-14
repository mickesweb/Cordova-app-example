var mediaRec = 0;

/* Runs when the media is created.
 * @return NO
 */
function recordSuccess() {
    $('#recordStatus').html("Media skapad ");
    $('#recordTime').html("");
}

/* Runs if something goes wrong.
 * input:
 * 	@param exception e
 * @return NO
 */
function recordFail(e) {
    $('#recordStatus').html("Fel: " + error.code); 
    console.log('Record error, code: ' + error.code);
}

/* Listen to what was recorded.
 * @return NO
 */
function playback() {
    if(mediaRec) {
        $('#recordStatus').html('<span style="color:#04B404;">Spelar upp </span>');
        var playTime = 0;
        // Get the track length.
        var mediaLength = mediaRec.getDuration();
        // Fix, if the track length is unknown.
        if(mediaLength == -1) {
            mediaLength = 5;
        }
        // Play the track.
        mediaRec.play();
        var play = setInterval(function() {
            playTime = playTime + 1;
            $('#recordStatus').html('<span style="color:#04B404;">Spelar upp </span>');
            $('#recordTime').html(playTime + " sek");
            // Stop playing after the audio ends.
            if (playTime >= mediaLength) {
                clearInterval(play);
            }
        }, 1000);
    }
    $('#recordStatus').html("Media uppspelat. ");
    $('#recordTime').html("");
}
	
/* Record 5 seconds.
 * @return NO
 */
function record() {
    var src = "myrecording.mp3";
    if(mediaRec) {
        //Allows you to record a new record.
        mediaRec.release();  
    }
    // Create a new media.
    mediaRec = new Media(src, recordSuccess, recordFail);
    // Start record.
    mediaRec.startRecord();
    $('#recordStatus').html('<span style="color:#f22;">spelar in </span>');
    $('#recordTime').html("0 sec");
    var recTime = 0;
    var recInterval = setInterval(function() {
        recTime = recTime + 1;
        $('#recordStatus').html('<span style="color:#f22;">spelar in </span>');
        $('#recordTime').html(recTime + " sek");
        // Stop recording after 5 sec.
        if(recTime >= 5) {
            $('#recordStatus').html("spelade in ");
            clearInterval(recInterval);
            mediaRec.stopRecord();
        }
    }, 1000);    
}