document.addEventListener('DOMContentLoaded', () => {

console.log('script is connected');

const menu = document.querySelector('.menu');
const hero = document.querySelector('.hero');


// document.querySelector('.second-section').onscroll = () => {
//   menu.classList.add('menu-top');
//   console.log('scrolling')
// }


  setInterval(function(){
    const vh = hero.offsetHeight;

    if (document.body.scrollTop > vh) {
      menu.classList.add('menu-top');
    } else {
      menu.classList.remove('menu-top');
    }

  }, 100)

});
