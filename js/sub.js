/* sub1 */
const sub1Scroll = () => {
    let $subDesc = getAll('.subDesc');
    window.addEventListener('scroll', () => {
        if (document.querySelector('html').scrollTop > 100) {
            $subDesc.classList.add('scrollOn');
        } else {
            $subDesc.classList.remove('scrollOn');
        }
    });
};
sub1Scroll();