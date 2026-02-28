/* JS Document for AU Autosports website */
/* Author: Jonathan Powell-Williams Aka: JonPowWil / Kynan.Fox / The big J */
/* Last Updated: 2/28/2026 */

/* disable animations until page is fully loaded to prevent eye strain */
const html = document.querySelector('html');
window.addEventListener("load", () => {
  html.classList.remove("preload");
});

/* stop animations and nav during resizing to prevent eye strain */
let resizeTimer;
window.addEventListener("resize", () => {

  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-pages');
  const bodyscroll = document.querySelector('body')

  /* remove nav active classes and noscroll when resizing to prevent nav still being open */
  if (window.screen.availWidth > 680){
    nav.classList.remove('nav-active-1'); 
    nav.classList.remove('nav-active-2'); 
    nav.classList.remove('nav-active-3'); 
    nav.classList.remove('nav-active-4'); 
    bodyscroll.classList.remove('no-scroll');
    burger.classList.remove('toggle');
  }

  /* add and remove the resize animation stopper class */
  html.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    html.classList.remove("resize-animation-stopper");
  }, 250);
});


/* nav animation and toggle */
const navSlide = () => {

  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-pages');
  const navLinks = document.querySelectorAll('.nav-pages li');
  const bodyscroll = document.querySelector('body')

  burger.addEventListener('click', () => {

    /* toggle nav active classes with staggered timing for animation */
    nav.classList.toggle('nav-active-1');
    setTimeout(() => {
      nav.classList.toggle('nav-active-2');
    }, 125);
    setTimeout(() => {
      nav.classList.toggle('nav-active-3');
    }, 250);
    setTimeout(() => {
      nav.classList.toggle('nav-active-4');
    }, 375);
    
    /* toggle noscroll on body to prevent scrolling when nav is open */
    bodyscroll.classList.toggle('no-scroll');

    /* toggle burger animation */
    burger.classList.toggle('toggle');
    
  });    
}
navSlide();

/* theme toggle and dark mode support */
const modeToggle = () => {

  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.querySelector('html');
  const checkDarkPreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
  
  /* check if user has dark mode preference and set theme accordingly on page load */
  if (checkDarkPreferred()) {

    /* set dark mode active classes and icons on page load if user has dark mode preference */
    html.classList.add('dark');
    themeToggle.classList.add('theme-active','theme-scale');
    document.getElementById("icon-i").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_white_outline.svg"; 
    document.getElementById("icon-f").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_white_outline.svg";
    document.getElementById("icon-l").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_white_outline.svg";
  
  }

  /* toggle theme and animate theme toggle button */
  themeToggle.addEventListener('click', () => {

    themeToggle.classList.toggle('theme-active');
    setTimeout(() => {
      
      themeToggle.classList.toggle('theme-scale');
      html.classList.toggle('dark');
      
      /* toggle social media icons between light and dark versions */
      if (document.getElementById("icon-i").src == "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_blue_outline.svg"){
        document.getElementById("icon-i").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_white_outline.svg";
        document.getElementById("icon-f").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_white_outline.svg";
        document.getElementById("icon-l").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_white_outline.svg";
      } else {
        document.getElementById("icon-i").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_blue_outline.svg";
        document.getElementById("icon-f").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_blue_outline.svg";
        document.getElementById("icon-l").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_blue_outline.svg";
      }

    }, 125); 

  });
}
modeToggle();















