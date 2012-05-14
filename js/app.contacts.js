/* This function is running if it was ok to get contacts.
 * Input:
 * 	@param objects contacts
 * @return NO
 */
function getSuccess(contacts) {
    // Print info about the contacts.
    $('#contactsInfo').html('<p class="strong">Du har: ' + contacts.length + 'st kontakter.</p>');
    $('#contactsInfo').append('Den f�rsta kontakten �r: '+ contacts[0].displayName);
}

/* This function is running if it was ok to add new contact.
 * Input:
 * 	@param object contact
 * @return NO
 */
function addSuccess(contact) {
    $('#contactsInfo').html('<p class="strong">Den nya kontakten har nu lagts till.</p>');
    $('#addContact').val("");	
}

/* The function will run if something went wrong.
 * Input:
 * 	@param exception e
 * @return NO
 */
function contactFail (e) {
    $('#contactsInfo').html('<p class="strong">N�got gick fel..</p>');
}
	
/* Retrieving all contacts.
 * @return NO
 */
function getContacts() {
    // find all contacts.
    var options = new ContactFindOptions();
    options.filter=""; 
    options.multiple = true;
    var fields = ["displayName"];
    navigator.contacts.find(fields, getSuccess, contactFail, options);
	
}

/* Adds a new contact.
 * @return NO
 */
function addContact() {
    var contactName = $('#addContact').val();
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = contactName;
    contact.nickname = contactName; 
    // save to device
    contact.save(addSuccess,contactFail);
}

