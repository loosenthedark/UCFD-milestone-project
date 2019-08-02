/* Smooth scrolling between page sections implemented thanks to the following Stack Overflow query: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link */

/* JavaScript/jQuery code below adapted from the following JSFiddle demo: https://jsfiddle.net/9SDLw/ */

/* $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
}); */

/* jQuery smoothscroll workaround implemented via Traversy Media c/o the following YouTube tutorial: https://www.youtube.com/watch?v=y9nlfqT4s9s */

$('a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
});
