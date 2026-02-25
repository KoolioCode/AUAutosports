











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
  const html = document.querySelector('html');
  
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
