$(document).ready(function(){
    
    $("#exp-scroller").click(function() {
        $('html,body').animate({
            scrollTop: $(".exp-section").offset().top},
            100);
    });


});



