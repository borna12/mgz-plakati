

//izmjene za rezolucije

$(document).ready(function () {
    function checkWidth() {
        if ($(window).width() <= 1024) {
            $(".LeftMenuHolder").hide()
        }
        else if ($(window).width() <= 600) {
            $("a.backLink").hide()
            $(".header a.backLink").html("<<")
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});