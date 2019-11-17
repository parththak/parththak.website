$(document).ready(function(){
    $("#project-scroller").click(function() {
        $('html,body').animate({
            scrollTop: $(".projects").offset().top},
            100);
    });
});