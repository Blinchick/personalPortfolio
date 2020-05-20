// Can also be included with a regular script tag

let options = {
    strings: ['prirdo', 'pirdonk', 'piridonenkova'],
    typeSpeed: 80,
    backSpeed: 80,
    smartBackspace: true, // this is a default
    // loop: true
};

let typed = new Typed('.typed', options);

//scroll library
AOS.init();

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // smooth scroll with jQuery
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    // humburger menu
    $(".mobileMenu").click(function () {
        $(".icon").toggleClass("close");
        $("header nav").toggleClass("open");

        $('header nav').click(function () {
            $(".icon").removeClass("close")
            $("header nav").removeClass("open");
        });
    });

});