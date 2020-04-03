

//izmjene za rezolucije
$(document).ready(function () {
if ($(window).width() <= 1024) {
    alert("radi")
}
 else if ($(window).width() <= 600){
    $("backLink").text("<")
 }})