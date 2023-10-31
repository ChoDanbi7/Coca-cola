let id = document.id;

/* sub1 */
if( id == 'sub1_2'){
    sub1Scroll();
}

const sub1Scroll = () => {
    let $subDesc = getAll('.subDesc');
    $subDesc.forEach( (sub1Item,sub1Idx) => {
        window.addEventListener('scroll', () => {
            if (document.querySelector('html').scrollTop > 100) {
                sub1Item[sub1Idx].classList.add('scrollOn');
            } else {
                sub1Item[sub1Idx].classList.remove('scrollOn');
            }
        });
    });
};


/* sub2 */
/* let $sub2tabBtn = getAll('.sub2_tab ul .sub_tabBtn');
let $sub2tabDesc = getAll('.sub2_tab .sub2_tabCont .sub_tabDesc')

$sub2tabBtn.forEach( (sub2tab, sub2idx) => {
    sub2tab.addEventListener('click', e => {
        e.preventDefault();
        $sub2tabDesc.forEach( sub2tabitem => {
            sub2tabitem.classList.remove('subTabOn');
        })

        $sub2tabBtn.forEach( sub2tabBtnItem => {
            sub2tabBtnItem.classList.remove('subTabOn');
        })

        $sub2tabBtn[sub2idx].classList.add('subTabOn');
        $sub2tabDesc[sub2idx].classList.add('subTabOn');
    })
})

let $sub2tabNext = get('.sub2_tab .sub2_tabCont .sub_tabNext');
let $sub2tabPrev = get('.sub2_tab .sub2_tabCont .sub_tabPrev');
let $sub2ImgSlide = getAll('.sub2_tab .sub2_tabCont .sub_tabDesc .subTabOff li');
let $sub2tabDescli = getAll('.sub2_tab .sub2_tabCont .sub_tabDesc ul li')
let sub2ImgSize = $sub2ImgSlide.length, subcnt = 0, subOld = 0;
let sub2PosX = [0, -150, -150*2, -150*3, -150*4, -150*5, -150*6, -150*7];

$sub2ImgSlide.forEach( (sub2Imgtab, sub2Imgidx) => {
    sub2Imgtab.addEventListener('click', e => {
        e.preventDefault();
        $sub2tabDesc.forEach( sub2tabImgitem => {
            sub2tabImgitem.classList.remove('subTabDescOn');
        })
        $sub2tabBtn.forEach( sub2tabImagesItem => {
            sub2tabImagesItem.classList.remove('subTabDescOn');
        })
        $sub2ImgSlide[sub2Imgidx].classList.add('subTabDescOn');
    })
})

$sub2tabNext.addEventListener('click', e => {
    subcnt++;
    if( subcnt > sub2ImgSize - 1 ) subcnt = 0;
    sub2Img();
})
$sub2tabPrev.addEventListener('click', e => {
    subcnt--;
    if( subcnt < 0 ) subcnt = sub2ImgSize - 1;
    sub2Img();
})

function sub2Img(){
    $sub2ImgSlide[subOld].style.transform = `translateX(-${ sub2PosX[subcnt]}px)`;
    $sub2ImgSlide[subcnt].style.transform = `translateX(${ sub2PosX[subcnt]}px)`;
    subOld = subcnt;
} */