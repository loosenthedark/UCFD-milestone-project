/* Smooth scrolling between page sections implemented thanks to the following Stack Overflow query: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link */

/* JavaScript/jQuery code below adapted from the following JSFiddle demo: https://jsfiddle.net/9SDLw/ */

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
});