

//izmjene za rezolucije


 


var windowsize = $(window).width();

$(window).resize(function() {
  windowsize = $(window).width();
  if ($(window).width() <= 1024) {
}
 else if ($(window).width() <= 600){
    $(".backLink").text("<")
    alert("radi")

 }
});