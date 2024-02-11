
window.addEventListener('scroll', function () {
  var frontPageSection = document.querySelector('.FrontPage');
  var aboutSection = document.getElementById('about');
  var navLogo = document.getElementById('navlogo');
  var navHome = document.getElementById('navHome');


  // Get the bottom position of the frontpage section
  var frontPageBottom = frontPageSection.offsetTop + frontPageSection.offsetHeight;

  // Check if the user has scrolled past the frontpage section
  if (window.pageYOffset > frontPageBottom) {
      // Show the logo in the navigation bar
      navLogo.classList.remove('hide-logo');
  } else {
      // Hide the logo if the user scrolls back up to the front page section
      navLogo.classList.add('hide-logo');
  }
});


jQuery(document).ready(function($){
    let slider = $('.owl-carousel');
    slider.each(function () {
      $(this).owlCarousel({
        nav: true,
        loop:false,
        dots: false,
        pagination: false,
        margin: 25,
        autoHeight: false,
        stagePadding: 50,
        responsive:{
          0:{
            items: 1,
            stagePadding: 0,
            margin: 30,
          },
          767:{
            items: 3,
            stagePadding: 25,
          },
          1000:{
            items: 3,
          }
        }
      });
    });
  });



  /* Nav Bar */ 
var blue_color ="#2aa9df", light_color ="#f7f7f7";
window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
    progress_div();
  };


function progress_div() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("mynav").style.height = "70px";
      //document.getElementById("progress-container").style.display="block";
     
    } else {
      document.getElementById("mynav").style.height = "80px";
      //document.getElementById("progress-container").style.display="none";
  
    }
  }
 