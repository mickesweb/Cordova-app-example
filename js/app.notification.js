/* Opens a popup window.
 * @return NO
 */
function popup() {
    /* Running if the alert is not working.
     * @return NO
     */
    function alertDismissed() {
        console.log("Alert dismissed");
    }
    // Create a popup.
    navigator.notification.alert('Ett fint meddelande', alertDismissed, 'Rubrik!', 'Avsluta');
}

/* Sending an audio signal.
 * @return NO
 */
function beep() {
    // "Beep" three times.
    navigator.notification.beep(3);
}

/* Starts  a vibration.
 * @return NO
 */
function vibrate() {
    // vibrate 1 sec.
    navigator.notification.vibrate(1000);
}