$.fn.extend({
    toggleText: function(a, b) {
        return this.text(this.text() == b ? a : b);
    }
});

if ($(".languageHolder").parents('.mainTitle').length == 1) {
    $(".languageHolder").addClass("naslovna-jez")
}


$('.LeftMenuHolder, .RightContentHolder, .ContentHolder').wrapAll('<div class="section group">');
$('.LeftMenuHolder').addClass("col span_1_of_3")
$('.RightContentHolder').addClass("col span_1_of_3")
$('.ContentHolder').addClass("col span_1_of_3")


if ($('.RightContentHolder ').length == 0 && $('.LeftMenuHolder ').length != 0) {
    $(".ContentHolder ").addClass('span_2_of_3').removeClass('span_1_of_3');
    $(".header").after('<div id="mySidenav" class="sidenav sticky2" ontouchend="this.onclick=fix"><a href="#" id="about" >izbornik >></a></div>')
}



//izmjene za rezolucije
$(document).ready(function() {
    if ($('.RightContentHolder').length == 0 && $('.LeftMenuHolder:has(img)').length == 0) {
        $(".LeftMenuHolder").addClass("sakri")
        $(".LeftMenuHolder").prepend('<p class="x" style="text-align:right; color:white; padding:10px"><i class="fa fa-times" aria-hidden="true" style=" font-size: 30px;cursor:pointer"></i>')
    }

    function checkWidth() {

        if ($(window).width() <= 600) {
            $(".span_2_of_3").css({ "padding": "20px" })
            $(".backLink").text("<<")

        } else if ($(window).width() <= 1200) {
            $(".backLink").text("<<")
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    $("#mySidenav").unbind("click").click(function() {
        $(this).hide()
        $('.LeftMenuHolder').addClass("prikazi");
    })
    $(".fa-times").unbind("click").click(function() {
        $(".LeftMenuHolder").removeClass("prikazi")
        $('#mySidenav').show();
    })

});


/*
$.getScript("https://cdn.jsdelivr.net/npm/browser-image-compression@latest/dist/browser-image-compression.js")
    .done(function(script, textStatus) {

    })
    .fail(function(jqxhr, settings, exception) {});*/