
let bannerLi = document.querySelectorAll('#banner .main-banner > li');
let bannerPaging = document.querySelectorAll('.banner-right .banner-paging > li');
let current = 0, old = 0, totalImages = bannerLi.length, timer = null, interval = 5000;

timer = setInterval( make, interval );
bannerPaging[0].classList.add('on');

function make(){
    current++;
    if( current > totalImages - 1 ) current = 0;
    banner();
}

bannerPaging.forEach( (item,idx) => {
    item.addEventListener('click', e => {
        current = idx;
        banner();
    })
})

function banner(){
    bannerLi[old].style.top = '-1000px';
    bannerLi[old].style.zIndex = '1';
    bannerLi[current].style.top = '0px';
    bannerLi[current].style.zIndex = '10';

    bannerPaging[old].classList.remove('on');
    bannerPaging[current].classList.add('on');

    old = current;

    clearInterval( timer );
    timer = setInterval( make, interval );
}

/* bannerLi.addEventListener('mouseenter', e => {
    clearInterval( timer );
}) */
/* bannerLi.addEventListener('mouseleave', e => {
    timer = setInterval( make, interval );
}) */

;( () => {

    
})();