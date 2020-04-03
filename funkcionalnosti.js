

//izmjene za rezolucij$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    
$(document).ready(function() {
    var prozor = $(window);

    function checkWidth() {
        var windowsize = prozor.width();
        if ($(windowsize).width() <= 1024) {
            alert("radi")
        }
         else if ($(windowsize).width() <= 600){
            $(".backLink").text("<")
            
        
         }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});