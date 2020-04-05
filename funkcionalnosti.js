$.fn.extend({
    toggleText: function(a, b) {
        return this.text(this.text() == b ? a : b);
    }
});


$('.LeftMenuHolder, .RightContentHolder, .ContentHolder').wrapAll('<div class="section group">');
$('.LeftMenuHolder').addClass("col span_1_of_3")
$('.RightContentHolder').addClass("col span_1_of_3")
$('.ContentHolder').addClass("col span_1_of_3")


if ($('.RightContentHolder ').length == 0) {
    $(".ContentHolder ").addClass('span_2_of_3').removeClass('span_1_of_3');
    $(".header").after('<div id="mySidenav" class="sidenav" ontouchend="this.onclick=fix"><a href="#" id="about" style="display:none">izbornik >></a></div>')
}
//izmjene za rezolucije
$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() <= 600) {
            $(".backLink").text("<<")
            $(".span_2_of_3").css({ "padding": "20px" })
            if ($('.RightContentHolder').length == 0 && $('.LeftMenuHolder:has(img)').length == 0) {
                $(".LeftMenuHolder").addClass("sakri")
                $("#about").show()
            }
        } else if ($(window).width() <= 1200) {
            if ($('.RightContentHolder').length == 0 && $('.LeftMenuHolder:has(img)').length == 0) {
                $(".backLink").text("<<")
                $(".LeftMenuHolder").addClass("sakri")
                $(".span_2_of_3").css({ "width": "100%" })
                $("#about").show()
            }
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

$("#mySidenav").unbind("click").click(function() {
        $(this).hide()
        $('.LeftMenuHolder').toggle();
    })
    /*
    $.getScript("https://cdn.jsdelivr.net/npm/browser-image-compression@latest/dist/browser-image-compression.js")
        .done(function(script, textStatus) {

        })
        .fail(function(jqxhr, settings, exception) {});*/