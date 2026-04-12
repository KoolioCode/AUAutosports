/* JS Document for AU Autosports website */

/* commenting out for local debugging
if (window.location.href.endsWith(".html")) {
  window.location.href = window.location.href.replace(".html", "");
}

if (window.location.href.endsWith("index.html")) {
  window.location.href = window.location.href.replace("index.html", "");
}
*/

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

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-pages');
  const bodyscroll = document.querySelector('body');

  burger.addEventListener('click', () => {

    /* toggle nav active classes with staggered timing for animation */
    setTimeout(() => {
      nav.classList.toggle('nav-active');
    }, 0);
    
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
  var keepTheme =  localStorage.getItem("keepTheme");
 
  
  /* check if user has dark mode preference and set theme accordingly on page load */
  if (checkDarkPreferred() && localStorage.getItem("keepTheme") == "t") {

    /* set dark mode active classes and icons on page load if user has dark mode preference */
    html.classList.add('dark');
    themeToggle.classList.add('theme-active','theme-scale');
    document.getElementById("icon-i").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_white_outline.svg"; 
    document.getElementById("icon-f").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_white_outline.svg";
    document.getElementById("icon-l").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_white_outline.svg";
    document.getElementById("icon-is").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_white_outline.svg"; 
    document.getElementById("icon-fs").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_white_outline.svg";
    document.getElementById("icon-ls").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_white_outline.svg";
    
  }


  /* toggle theme and animate theme toggle button */
  themeToggle.addEventListener('click', () => {
    if (keepTheme == "t"){
      keepTheme = "f";
      localStorage.setItem("keepTheme", keepTheme);
    }else if (keepTheme == "f"){
      keepTheme = "t";
      localStorage.setItem("keepTheme", keepTheme);
    }
      
    themeToggle.classList.toggle('theme-active');
    setTimeout(() => {
      
      themeToggle.classList.toggle('theme-scale');
      html.classList.toggle('dark');
      
      /* toggle social media icons between light and dark versions */
      if (document.getElementById("icon-i").src == "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_blue_outline.svg"){
        document.getElementById("icon-i").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_white_outline.svg";
        document.getElementById("icon-f").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_white_outline.svg";
        document.getElementById("icon-l").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_white_outline.svg";
        if ( document.URL.includes("contact.html") ) {
          document.getElementById("icon-is").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_white_outline.svg";
          document.getElementById("icon-fs").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_white_outline.svg";
          document.getElementById("icon-ls").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_white_outline.svg";
        }
      } else {
        document.getElementById("icon-i").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_blue_outline.svg";
        document.getElementById("icon-f").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_blue_outline.svg";
        document.getElementById("icon-l").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_blue_outline.svg";
        if ( document.URL.includes("contact.html") ) {
          document.getElementById("icon-is").src = "https://cdn.auburn.edu/assets/icons/social_media/instagram/instagram_blue_outline.svg";
          document.getElementById("icon-fs").src = "https://cdn.auburn.edu/assets/icons/social_media/facebook/facebook_blue_outline.svg";
          document.getElementById("icon-ls").src = "https://cdn.auburn.edu/assets/icons/social_media/linkedin/linkedin_blue_outline.svg";
        }
      }

    }, 125); 

  });

}
modeToggle();

if ( document.URL.includes("gallery.html") ) {
  
  const list = document.querySelector(".carousel-list");
 
  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".carousel-item");
  const itemWidth = item.offsetWidth; 

  function handleClick(direction) {
    // Based on the direction we call `scrollBy` with the item width we got earlier
    if(direction === "previous") {
      list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  }
}


// init Masonry
var $grid = $('.photogrid').masonry({
  itemSelector: '.photocontainer', 
  columnWidth: '.photogridsizer', 
  gutter: 10, 
  horizontalOrder: true
});
// layout Masonry after each image loads
$('.photogrid').imagesLoaded().progress( function() {
  $grid.masonry('layout');
});















