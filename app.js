document.addEventListener('DOMContentLoaded', () => {

console.log('script is connected');

const menu = document.querySelector('.menu');
const hero = document.querySelector('.hero');
const umbrella = document.querySelector('.umbrella');


  setInterval(function(){
    const vh = hero.offsetHeight;

    if (document.body.scrollTop > vh/2){
      umbrella.classList.add('animated');
    }

    if (document.body.scrollTop > vh) {
      menu.classList.add('menu-top');

    } else {
      menu.classList.remove('menu-top');
    }

  }, 100)

});
