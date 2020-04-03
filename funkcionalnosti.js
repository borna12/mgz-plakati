

//izmjene za rezolucij$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    
$(document).ready(function() {

    function checkWidth() {
     
        if ($(window).width() <= 1024) {
            alert("radi")
        }
         else if ($(window).width() <= 600){
            $(".backLink").text("<")
         }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});