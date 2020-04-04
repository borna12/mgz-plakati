$('.LeftMenuHolder, .RightContentHolder, .ContentHolder').wrapAll('<div class="section group">');
$('.LeftMenuHolder').addClass("col span_1_of_3")
$('.RightContentHolder').addClass("col span_1_of_3")
$('.ContentHolder').addClass("col span_1_of_3")
    //izmjene za rezolucije
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