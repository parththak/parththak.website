$(document).ready(function(){
    
    $("#exp-scroller").click(function() {
        $('html,body').animate({
            scrollTop: $(".project-section").offset().top},
            100);
    });
});



