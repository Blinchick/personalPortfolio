// Can also be included with a regular script tag

let options = {
    strings: ['pirdo', 'pridonk', 'piridonenkova'],
    typeSpeed: 80,
    backSpeed: 80,
    smartBackspace: true, // this is a default
    // loop: true
};

let typed = new Typed('.typed', options);

// humburger menu
$(".mobileMenu").click(function () {
    $(".icon").toggleClass("close");
    $("header nav").toggleClass("open")
});

