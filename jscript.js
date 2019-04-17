$(document).ready(function(){
$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        100);
});
});