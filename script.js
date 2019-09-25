function hideAndShowNavBar() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById('navbar').style.top = '0';
        } else {
            document.getElementById('navbar').style.top = '-3em';
        }
        prevScrollpos = currentScrollPos;
    }
}

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

    hideAndShowNavBar()
    handleHamburgerClick();
    hideSideMenu();
    moreInfo();
}

$(handlePage());