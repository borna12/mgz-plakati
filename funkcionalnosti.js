//izmjene za rezolucije

$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() <= 1024) {} else if ($(window).width() <= 600) {

            $(".backLink").text("<<")
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

$(".backLink").text("<<")