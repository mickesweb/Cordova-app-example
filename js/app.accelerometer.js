var accelerationWatch = null;
var areaWidth;
var areaHeight;
var ball;
var ballPosition = {
    x: 0, 
    y: 0
};

/* The game engine that is invoked at all times when the game is running.
 * Input:
 * 	@param acceleration acceleration
 * @return NO
 */
function updateGameState(acceleration) {
    // Move the ball and draw it on the new position.
    // TODO: check if x and y calculated correct.
    var x = ballPosition.x - (acceleration.x * acceleration.z); 
    var y = ballPosition.y + (acceleration.y * acceleration.z);
    drawBall(x, y);
    // If the ball go into the wall.
    if( x<0 || x>areaWidth || y<0 || y>areaHeight) {
        alert("Spelet tog slut..");
        stopGame();
    }
    ballPosition.x = x;
    ballPosition.y = y;
// TODO: lock the orientation to landscape.
}

/* Start a new "game".
 * @return NO
 */
function startGame() {
    $("#apiAccelerometer").hide();
    $("#apiAccelerometerGame").show();
    // Fix game area size.
    areaWidth = $(document).width() - 30;
    areaHeight = $(document).height() - 200;
    $("#gameArea").attr('width', areaWidth);
    $("#gameArea").attr('height', areaHeight);
    // Create and draw the ball.
    ballPosition = {
        x: (areaWidth/2),
        y: (areaHeight/2)
    };
    ball = gameArea.getContext('2d');
    drawBall(ballPosition.x, ballPosition.y);
    // start to lisen on the devis acceleration.
    var options = {};
    options.frequency = 100;
    accelerationWatch = navigator.accelerometer.watchAcceleration(updateGameState, function(e) {
        alert("Accelerometer Error!");
    }, options);
}

/* Turn off the game.
 * @return NO
 */
function stopGame() {
    $("#apiAccelerometerGame").hide();
    $("#apiAccelerometer").show();
    if(accelerationWatch != null) {
        // Turn off cecking the acceleration.
        navigator.accelerometer.clearWatch(accelerationWatch);
        updateAcceleration({
            x : "",
            y : "",
            z : "",
            timestamp: ""
        });
        accelerationWatch = null;
    }	
}

/* Draw a ball in gameArea.
 * Input:
 * 	@param int x
 * 	@param int y
 * @return NO
 */
function drawBall(x, y) {
    ball.clearRect(0,0, areaWidth,areaHeight);
    ball.beginPath();
    ball.fillStyle="#0000ff";
    ball.arc(x,y,20,0,Math.PI*2,true); 
    ball.closePath();
    ball.fill();
}
