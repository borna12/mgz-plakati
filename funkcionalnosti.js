//izmjene za rezolucije

$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() <= 600) {
            alert("dff")
            $(".backLink").text("<<")
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});