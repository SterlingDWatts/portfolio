function handleHamburgerClick() {
    $('.hamburger').on('click', e => $('.burger-nav').removeClass('hidden'));
}

function hideSideMenu() {
    $('.burger-nav li, .burger-nav a').on('click', e => $('.burger-nav').addClass('hidden'));
}

function moreInfo() {
    $('.more-info').on('click', function(event) {
        $('.about span').toggleClass('hidden');
    })
}

function handlePage() {
    handleHamburgerClick();
    hideSideMenu();
    moreInfo();
}

$(handlePage());