function hideAndShowNavBar() {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.getElementById('navbar').style.top = '0';
        } else {
            document.getElementById('navbar').style.top = '-3em';
        }
        prevScrollPos = currentScrollPos;
    }
}

function handleHamburgerClick() {
    $('.hamburger').on('click', e => $('.burger-nav').removeClass('hidden'));
}

function hideSideMenu() {
    $('.burger-nav li, .burger-nav a, main').on('click', e => $('.burger-nav').addClass('hidden'));
}

function moreInfo() {
    $('.about').on('click', '.more-info', function(event) {
        $($(this).attr('data-app')).toggleClass('hidden');

        if ($(this).text() === 'more info') {
            $(this).text('less info');
        } else {
            $(this).text('more info');
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