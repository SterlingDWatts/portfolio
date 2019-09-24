function handleHamburgerClick() {
    $('.hamburger').on('click', e => $('.burger-nav').removeClass('hidden'));
}

function hideSideMenu() {
    $('.burger-nav li, .burger-nav a, main').on('click', e => $('.burger-nav').addClass('hidden'));

}

function moreInfo() {
    const info = $('.more-info');

    info.on('click', function(event) {
        $('.about span').toggleClass('hidden');

        if (info.text() === 'more info') {
            info.text('less info');
        } else {
            info.text('more info');
        };
    })
}

function handlePage() {
    handleHamburgerClick();
    hideSideMenu();
    moreInfo();
}

$(handlePage());