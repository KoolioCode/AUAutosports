











const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.navlinks');
  const navLinks = document.querySelectorAll('.navlinks li');
  const bodyscroll = document.querySelector('body')
 
   
  
  burger.addEventListener('click', () => {

    

    nav.classList.toggle('navActive');
    
    bodyscroll.classList.toggle('noscroll');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLink Fade 0.5s ease forwards ${index/7 + 0.3}s`;
      }
    });
    burger.classList.toggle('toggle');
    
    document.body.scrollIntoView({
      behavior: "smooth",
    }); 
  }); 
}

navSlide();


const modeToggle = () => {

  const themeToggle = document.querySelector('.themeToggle');
  
  themeToggle.addEventListener('click', () => {


    
    
    themeToggle.classList.toggle('themeactive');
  }); 
}

modeToggle();















/*var headerBg = document.getElementById('bg')
window.addEventListener('scroll', function(){
  headerBg.style.opacity = 1 - +window.pageYOffset/880+''
  headerBg.style.top = +window.pageYOffset+'px'
  headerBg.style.backgroundPositionY = - +window.pageYOffset/1-300+'px'
})*/



/*let valueDisplays = document.querySelectorAll(".counter-num");
let interval = 1000;
console.log(valueDisplays);
valueDisplays.forEach((valueDisplay) => {
  let startValue =0;
  let endValue = parseInt(valueDisplay.getAttribute ("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue += 1
    valueDisplay.textContent = startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration)
})*/
