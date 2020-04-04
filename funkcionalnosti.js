//izmjene za rezolucije
$(".LeftMenuHolder").before("<div class='section group'>")
$(".RightContentHolder").after("</div>")
$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() <= 600) {
            $(".backLink").text("<<")
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});