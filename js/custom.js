$( document ).ready(function() {
    $("#downarrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});