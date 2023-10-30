/* banner */
let $bannerLi = getAll('#banner .main-banner > li');
let $bannerPaging = getAll('.banner-right .banner-paging > li');
let $bannerAni = getAll('.banner-left');
let current = 0, old = 0, totalImages = $bannerLi.length, timer = null, interval = 5000;

timer = setInterval( make, interval );
$bannerPaging[0].classList.add('on');

function make(){
    current++;
    if( current > totalImages - 1 ) current = 0;
    banner();
}

$bannerPaging.forEach( (item,idx) => {
    item.addEventListener('click', e => {
        current = idx;
        banner();
    })
})

function banner(){
    $bannerLi[old].style.top = '1000px';
    $bannerLi[old].style.zIndex = '1';
    $bannerLi[current].style.top = '0px';
    $bannerLi[current].style.zIndex = '10';

    $bannerPaging[old].classList.remove('on');
    $bannerPaging[current].classList.add('on');

    $bannerAni[old].classList.remove('aniOn');
    $bannerAni[current].classList.add('aniOn');

    lastBanner(old);
    old = current;

    clearInterval( timer );
    timer = setInterval( make, interval );
}

function lastBanner( x ) {
    setTimeout( () => {
        $bannerLi[x].style.top = '-1000px';
    }, 400 )
}

/* cont2 */
let $cont2_page = getAll('#content2 .cont2 .cont2_page');
let $cont2_img = getAll('#content2 .cont2 .cont2_page .con2_img');

$cont2_page.forEach( item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        removeCont2($cont2_page);
        e.currentTarget.classList.add('opening');
    })
})
const removeCont2 = (page) => {
    $cont2_page.forEach(page => {
        page.classList.remove('opening')
    })
}

/* cont3 */
let $cont3_h2 = get('#content3 .cont3_txt h2');
let WindowTy = 0;

window.addEventListener('scroll', e => {
    WindowTy = window.scrollY;
    $cont3_h2.style.left = `${-WindowTy}px`;
})

let cont3 = document.getElementById('content3');
let $cont3_strong = getAll('#content3 .cont3_desc .cont3_left ul li strong');
let countStart = 0, countEnd = 0, countStep = 0, countSpeed = 250, countCurrent = 0, cont3Top = 0, cont3OffsetTop = 0;

$cont3_strong.forEach( cont3item => {
    cont3item.textContent = countStart;
    countStep += 5; 
    const counter = () => {
        countEnd = Number(cont3item.dataset.num);
        countCurrent = Number( cont3item.textContent );
        countStep = 5;
        if( countCurrent < countEnd ){
            cont3item.textContent = countStep + countCurrent;
            setTimeout( counter , 5 ); 
        } else {
            cont3item.textContent = countEnd;
        }
    }
    window.addEventListener('scroll', e => {
        cont3OffsetTop = cont3.offsetTop;
        cont3Top = window.scrollY;
        if( cont3OffsetTop > cont3Top-3 &&  cont3OffsetTop < cont3Top+3 ) {
            counter();
        }
    })
})

/* cont4 */
let $tabBtn = getAll('.cont4 .tab_menu ul .tab_btn');
let $tabDesc = getAll('.cont4 .tab_menu .tab_cont .tab_desc')

$tabBtn.forEach( (tab, idx) => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        $tabDesc.forEach( tabitem => {
            tabitem.classList.remove('tap_on');
        })

        $tabBtn.forEach( tabBtnItem => {
            tabBtnItem.classList.remove('tap_on');
        })

        $tabBtn[idx].classList.add('tap_on');
        $tabDesc[idx].classList.add('tap_on');
    })
})

/* cont5 */
let srcsArr = ['vloMDezTHWc', 'cvnkyYb1NL8', 'dvQ2bdAoaeg', '6DSTVlUdq-s'];
var video = document.getElementById('video');
var $playlist = get('.cont5 .cont5_vid .vid_list');

function loadplaylist() {
    let result = '';
    for (let i = 0; i < srcsArr.length; i++) {
        result += `<div class="playlistVideo"><div class="vid_subList">
        <div id=` + i + ` onclick="clickhandler(id)" class="widget"></div>
        <iframe id='frame-` + i + `' src="https://www.youtube.com/embed/` + srcsArr[i] + `?controls=0&mute=1" title="YouTube video player" frameborder="0"></iframe> </div>
    </div>`;
    }
    $playlist.innerHTML = result;
}
loadplaylist();
function clickhandler(id) {
    let videoSrc = document.getElementById('frame-' + id).src;
    video.src = `${videoSrc}&amp;autoplay=1`;
}

/* cont6 */
let $brandsList = get('.cont6 .cont6_brands .brand_list');
let $brandsMore = get('.cont6 .cont6_more');

let brandsData = [
    {id:1, img:'images/main/cont6/cont6_1.png', title:'코카-콜라'},
    {id:2, img:'images/main/cont6/cont6_2.png', title:'스프라이트'},
    {id:3, img:'images/main/cont6/cont6_3.png', title:'환타'},
    {id:4, img:'images/main/cont6/cont6_4.png', title:'조지아'},
    {id:5, img:'images/main/cont6/cont6_5.png', title:'파워에이드'},
    {id:6, img:'images/main/cont6/cont6_6.png', title:'강원 평창수'},
    {id:7, img:'images/main/cont6/cont6_7.png', title:'씨그램'},
    {id:8, img:'images/main/cont6/cont6_8.png', title:'미닛메이드'},
    {id:9, img:'images/main/cont6/cont6_9.png', title:'VIO 휘오'},
    {id:10, img:'images/main/cont6/cont6_10.png', title:'토레타!'},
    {id:11, img:'images/main/cont6/cont6_11.png', title:'태양의 마테차!'},
    {id:12, img:'images/main/cont6/cont6_12.png', title:'태양의 식후비법 W차'},
    {id:13, img:'images/main/cont6/cont6_13.png', title:'비타민워터'},
    {id:14, img:'images/main/cont6/cont6_14.png', title:'캐나다 드라이'},
    {id:15, img:'images/main/cont6/cont6_15.png', title:'슈웹스'},
    {id:16, img:'images/main/cont6/cont6_16.png', title:'써니텐'},
    {id:17, img:'images/main/cont6/cont6_17.png', title:'코코팜'},
    {id:18, img:'images/main/cont6/cont6_18.png', title:'아침에 사과'},
    {id:19, img:'images/main/cont6/cont6_19.png', title:'갈아만든 배'},
]
let brandsImgUrl = '', brandsCurrent = 0, brandsTotalImg = brandsData.length, brandsCnt = 0;

const showBrands = () => {
    if( brandsCnt > brandsTotalImg - 1 ) return ;
    for( let i = 0 ; i < 8; i++ ) {
        const brandsli = document.createElement('li');
        const brandsimg = document.createElement('img');
        const brandsspan = document.createElement('span');
        // brandsspan.append(brandsname[i]);
        brandsspan.textContent = brandsData[brandsCnt].title;
        brandsimg.setAttribute('src', brandsData[brandsCnt].img);
        brandsimg.setAttribute('alt', brandsData[brandsCnt].title);
        brandsli.append( brandsimg );
        brandsli.append( brandsspan );
        $brandsList.append(brandsli);
        brandsCnt++;
    }
}
showBrands();

$brandsMore.addEventListener('click', e => {
    e.preventDefault();
    showBrands();
})

/* main Effect */
const mainEffect1 = () => {
    let $cont4Effect = get('.cont4 .cont4_effect');
    let cont4 = document.getElementById('content4');
    let cont4wt = cont4.offsetTop;
    let $htmlScroll = get('html');
    window.addEventListener('scroll', () => {
      if ($htmlScroll.scrollTop > cont4wt - 300) {
        $cont4Effect.classList.add('mainAniOn');
      } else {
        $cont4Effect.classList.remove('mainAniOn');
      }
    });
  };
  mainEffect1();

  const mainEffect2 = () => {
    let $cont6Effect = get('.cont6 .cont6_effect');
    let cont6 = document.getElementById('content6');
    let cont6wt = cont6.offsetTop;
    let $htmlScroll = get('html');
    window.addEventListener('scroll', () => {
      if ($htmlScroll.scrollTop > cont6wt - 500) {
        $cont6Effect.classList.add('mainAniOn');
      } else {
        $cont6Effect.classList.remove('mainAniOn');
      }
    });
  };
  mainEffect2();

