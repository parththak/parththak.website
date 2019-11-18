$(document).ready(function(){
    
    $("#exp-scroller").click(function() {
        $('html,body').animate({
            scrollTop: $(".experience").offset().top},
            100);
    });
});



