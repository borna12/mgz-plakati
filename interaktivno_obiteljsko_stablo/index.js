function touchHandler(event) {
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch (event.type) {
        case "touchstart":
            type = "mousedown";
            break;
        case "touchmove":
            type = "mousemove";
            break;
        case "touchend":
            type = "mouseup";
            break;
        default:
            return;
    }


    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
        first.screenX, first.screenY,
        first.clientX, first.clientY, false,
        false, false, false, 0 /*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}
$(".geDiagramContainer").addClass("dragscroll")
window.onhashchange = locationHashChanged


/*u donjoj funkciji se dodaje tekst za svaku osobu. Osobe po redoslijedu slike idu u smjeru od vrha, lijevo prema desno. koji prozorčić iskače ovisi o hashu u url-u stranice

popunjavaju se polja naslov, podnalsov, adresa_slike, tekst_html, poveznica
*/
function locationHashChanged() {
    //Hilleprand von Prandau
    if (window.location.hash.substr(1) == "marianna") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "alvina") {
        naslov = "Alvina grofica Pejačević"
        podnalsov = "(1830. - 1882.)"
        adresa_slike = "slike/MLU-S-737_hilleprand_alvina_1830-1882.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "koloman") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "stephanie") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
 
    else if (window.location.hash.substr(1) == "karlLudwig") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "sigismundPeter") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "mariaFranziskaKristina") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "amaliaKarolina") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "johannaFlora") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "AntonAntunGustav") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "adelhaidMariaAntonia") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "MariaAnna") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "MariaJosepha") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "MariaFranziska") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "JosephIgnazSigismund") {
        naslov = "Josip Ignjat barun Hilleprand von Prandau"
        podnalsov = "(1749. - 1816.)"
        adresa_slike = "slike/MLU-S-715_hilleprand_joseph ignaz sigismund_1749-1816.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "PeterIIAnton") {
        naslov = "Petar II. Antun barun Hilleprand von Prandau"
        podnalsov = "(1676.-1767.)"
        adresa_slike = "slike/MLU-S-714_hilleprand_peter II anton_1676-1767.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "JohannGeorg") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "MariaJacoba") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "MariaJosepha2") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "Gerhart") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "MaximilianEmanuel") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "FerdinandParis") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "DominikXavier") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "KarlLudwig2") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "PeterIHilleprand") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }

    //von Normann-Ehrenfels
    else if (window.location.hash.substr(1) == "maria") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "rudolfRikardGabrielMaria") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "rudolfKonstantinGustav") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "karlLudwig3") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "mariaAnna") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "mariaTheresiaJuliannaJosepha") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "mariaVeraAnkaProspera") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "gustav") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "anna") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "gustavRudolfKarlKaspar") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "rudolfJoseph") {
        naslov = "Rudolf Joseph"
        podnalsov = "(1857. - 1942.)"
        adresa_slike = "slike/MLU-S-719_normann_rudolf-joseph_1857-1942.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "carlChristof") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "alvin") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "nicolaEmilAlexandra") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "KarlLudwigAugustFriedrich") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "FranziskaHenrietteKarolinaAuguste") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "HeinrichFridrichKonstantin") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "Charlotte") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    //imena koja nisu u kvadratićima (djeca)
        else if (window.location.hash.substr(1) == "adelhaid") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "mariaTheresaBreznay") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
     else if (window.location.hash.substr(1) == "mariaAnaElenoraPejacevic") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
     else if (window.location.hash.substr(1) == "AnnaMariaKiennmayer") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
     else if (window.location.hash.substr(1) == "MariaViktoriavonJabornigg") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
     else if (window.location.hash.substr(1) == "MariaKristinaLattermann") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }     
    else if (window.location.hash.substr(1) == "MariaAnnavonPrambs") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
       else if (window.location.hash.substr(1) == "MariaBarbaravonMayern") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "mariaTheresaLauraAntonia") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "juliannaAntoniaEdlevonVest") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "hermineudovagroficaNyary") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "MariannaAnaZichy") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
    else if (window.location.hash.substr(1) == "KarolineFriedrikeVonWeiler") {
        naslov = "Ime osobe"
        podnalsov = "(ono što ide ispod imena)"
        adresa_slike = "slike/placeholder.jpg"
        poveznica = "http://valpovacki-vlastelini.info/"
        tekst_html = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        Swal.fire({
            title: naslov + "<br><span style='font-size:14px'>" + podnalsov + "<span>",
            html: "<img src='" + adresa_slike + "' style='width:100%;height:auto'/><p style='text-align:justify'>" + tekst_html + "</p><br><a href='" + poveznica + "' target='_blank'>Opširnije...</a>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#CBA133',
            confirmButtonText: 'zatvori'
        })
    }
}