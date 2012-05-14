var pictureSource;
var destinationType;

/* Fix the display of the captured image.
 * Input:
 *      @param image imageData
 * @return NO
 */
function onPhotoDataSuccess(imageData) {
    width = $(document).width() - 30;
    height = $(document).width() - 30;
    $("#cameraImage").css('width', width);
    $("#cameraImage").css('height', height);
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = "data:image/jpeg;base64," + imageData;
}

/* Fix the display of the image from album.
 * Input:
 * 		@param image imageURI
 * @return NO
 */
function onPhotoURISuccess(imageURI) {
    width = $(document).width() - 30;
    height = $(document).width() - 30;
    $("#cameraImage").css('width', width);
    $("#cameraImage").css('height', height);
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = imageURI;
}

/* Take a photo with the camera.
 * @return NO
 */
function takePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, function(e) {
        alert("Camera Error!");
    }, {
        quality: 50, 
        destinationType: destinationType.DATA_URL
    });
}

/* get a photo from album.
 * @return NO
 */
function getFromAlbum() {
    navigator.camera.getPicture(onPhotoURISuccess, function(e) {
        alert("Camera Error!"); 
    }, {
        quality: 30, 
        destinationType: destinationType.FILE_URI,
        sourceType: pictureSource.SAVEDPHOTOALBUM
    });
}