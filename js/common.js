const get = target => document.querySelector(target);
const getAll = target => document.querySelectorAll(target);

/* topUp btn */
const topBtnGo = () => {
    let topBtn = document.getElementById('top_btn');
    window.addEventListener('scroll', () => {
      if (document.querySelector('html').scrollTop > 500) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
  };
  topBtnGo();


;( () => {

})();