$(document).ready(function() {
    // Show homepage with info.
    $('.apiDiv').hide();
    $('.apiDiv#apiHome').show();
    // If home-button is pressed.
    $('#home').click(function(event) {
        $('.apiDiv').hide();
        $('.apiDiv#apiHome').show();
        // Go to the page without scroll.
        $.mobile.silentScroll(0);            
    });
    
    $('div ul li a').click(function(event) {
        event.preventDefault();
        var toDiv = $(this).attr('href');        
        // hide all div's, show only the selected.
        $('.apiDiv').hide();
        $(toDiv).show();
        // Close the menu.
        $('div.ui-collapsible').trigger("collapse");
        // Go to the page without scroll.
        $.mobile.silentScroll(0);            
    });
});
