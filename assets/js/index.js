/* jQuery smooth scroll workaround implemented via Traversy Media c/o the following YouTube tutorial: https://www.youtube.com/watch?v=y9nlfqT4s9s */

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
