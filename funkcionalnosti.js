function fix() {
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() { par.insertBefore(el, next); }, 0)
}

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
                $(".LeftMenuHolder").hide()
                $("#about").show()
                $("#mySidenav").unbind('mouseenter mouseleave')
            }
        } else if ($(window).width() <= 1200) {
            if ($('.RightContentHolder').length == 0 && $('.LeftMenuHolder:has(img)').length == 0) {
                $(".LeftMenuHolder").hide()
                $(".span_2_of_3").css({ "width": "100%" })
                $("#about").show()
                $("#mySidenav").unbind('mouseenter mouseleave')
            }
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

$("#mySidenav").unbind("click").click(function() {
        $("#mySidenav").find("a").toggleText('izbornik >>', 'izbornik <<');
        $('.LeftMenuHolder').toggle();
    })
    /*
    $.getScript("https://cdn.jsdelivr.net/npm/browser-image-compression@latest/dist/browser-image-compression.js")
        .done(function(script, textStatus) {

        })
        .fail(function(jqxhr, settings, exception) {});*/