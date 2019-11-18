$(document).ready(function(){
    $("#project-scroller").click(function() {
        $('html,body').animate({
            scrollTop: $(".projects").offset().top},
            100);
    });
  
});

$(document).ready(function(){
    $("#exp-scroller").click(function() {
        $('html,body').animate({
            scrollTop: $(".experience").offset().top},
            100);
    });
  
});


