

//izmjene za rezolucij$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    
$(document).ready(function() {
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if ($(windowsize).width() <= 1024) {
        }
         else if ($(windowsize).width() <= 600){
            $(".backLink").text("<")
            alert("radi")
        
         }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});