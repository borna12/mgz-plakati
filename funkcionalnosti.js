

//izmjene za rezolucije


 
var windowsize = $(window).width();
$(window).resize(function() {
  windowsize = $(window).width();
  if ($(windowsize).width() <= 1024) {
}
 else if ($(windowsize).width() <= 600){
    $(".backLink").text("<")
    alert("radi")

 }
});