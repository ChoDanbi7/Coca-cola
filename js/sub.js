/* sub1 */
const sub1Scroll = () => {
    let $subDesc = getAll('.subDesc');
    let $htmlScroll = get('html');
    window.addEventListener('scroll', () => {
      if ($htmlScroll.scrollTop > 100) {
        $subDesc.classList.add('scrollOn');
      } else {
        $subDesc.classList.remove('scrollOn');
      }
    });
  };
  sub1Scroll();