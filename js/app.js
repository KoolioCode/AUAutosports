







const html = document.querySelector('html');
window.addEventListener("load", () => {
  html.classList.remove("preload");
});

let resizeTimer;
window.addEventListener("resize", () => {

  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.navpages');
  const bodyscroll = document.querySelector('body')

  if (window.screen.availWidth > 680){
    nav.classList.remove('navActive1'); 
    nav.classList.remove('navActive2'); 
    nav.classList.remove('navActive3'); 
    nav.classList.remove('navActive4'); 
    bodyscroll.classList.remove('noscroll');
    burger.classList.remove('toggle');
  }

  html.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    html.classList.remove("resize-animation-stopper");
  }, 250);
});


const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.navpages');
  const navLinks = document.querySelectorAll('.navpages li');
  const bodyscroll = document.querySelector('body')
 
  
  
    burger.addEventListener('click', () => {

      

      nav.classList.toggle('navActive1');
      setTimeout(() => {
        nav.classList.toggle('navActive2');
      }, 125);
      setTimeout(() => {
        nav.classList.toggle('navActive3');
      }, 250);
      setTimeout(() => {
        nav.classList.toggle('navActive4');
      }, 375);
      
      bodyscroll.classList.toggle('noscroll');

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLink Fade 0.5s ease forwards ${index/7 + 0.3}s`;
        }
      });
      burger.classList.toggle('toggle');
      
      /*document.body.scrollIntoView({
        behavior: "smooth",
      }); */
    }); 
  
   
  
}

navSlide();


const modeToggle = () => {

  const themeToggle = document.querySelector('.themeToggle');
  const html = document.querySelector('html');
  const checkDarkPreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;

  if (checkDarkPreferred()) {
    html.classList.add('dark');
    themeToggle.classList.add('themeactive','themescale');
    document.getElementById("iconI").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_white_outline.svg"; 
    document.getElementById("iconF").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_white_outline.svg";
    document.getElementById("iconL").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_white_outline.svg";
  }
  themeToggle.addEventListener('click', () => {

    
    themeToggle.classList.toggle('themeactive');
    setTimeout(() => {
      themeToggle.classList.toggle('themescale');
      html.classList.toggle('dark');
      
      if (document.getElementById("iconI").src == "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_blue_outline.svg"){
        document.getElementById("iconI").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_white_outline.svg";
        document.getElementById("iconF").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_white_outline.svg";
        document.getElementById("iconL").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_white_outline.svg";
      } else {
        document.getElementById("iconI").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_blue_outline.svg";
        document.getElementById("iconF").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_blue_outline.svg";
        document.getElementById("iconL").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_blue_outline.svg";
    }
    }, 125); 
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
