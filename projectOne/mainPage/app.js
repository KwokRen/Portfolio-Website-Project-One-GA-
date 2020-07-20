// this click event listener will allow the hidden menu to display when the hamburger is clicked and will transform the hamburger icon to an X icon.
let $hamburger = $('.hamburger');
    $hamburger.on('click', function(e) {
    let $hamburgermenu = $('.hamburgermenu');
    $hamburgermenu.toggleClass('shown');
    $hamburger.toggleClass('hamburgercrossed')
      }
    );  

// this event listener listens to the size of the window, and if it's above 600px, the hidden menu will automatically hide.
$(window).resize (function(e) {
  if ($(window).width() < 600) {
    $('.hamburgermenu').removeClass('shown');
  }
});

 

// credit to mehrdad dastgir on stack overflow https://stackoverflow.com/questions/15275956/jquery-un-hover
// this event listener listens to when you hover over the divs on the nav bar when it is not in hamburger mode, which changes the color of the text to black.
const $desktophover = function(name, letter) {
  let $name = $(`.${name}`);
  $name.hover(function(){
  $(`#${letter}`).css('color', 'black');
  }, function(){
      $(`#${letter}`).css('color', 'white');
  });
};

$desktophover('desktopshowA', 'desktopshowhoverA');
$desktophover('desktopshowB', 'desktopshowhoverB');
$desktophover('desktopshowC', 'desktopshowhoverC');


// https://stackoverflow.com/questions/8693733/how-to-give-outer-glow-to-an-object-in-a-transparent-png-using-css3
// this event listener allowed me to add a filter to a transparent icon when i hovered over the div it contained. 
const $myinfohover = function(name, image, button) {
  let $name = $(`.${name}`);
  $name.hover(function() {
    $(`.${image}`).css('-webkit-filter','drop-shadow(0px 0px 7px rgba(255, 255, 255, 1)');
    $(`.${image}`).css('filter','drop-shadow(0px 0px 7px rgba(255, 255, 255, 1)');
  }, function() {
    $(`.${image}`).css('filter','none');
    })
};

$myinfohover('about','aboutinfoimage');
$myinfohover('projects','projectsinfoimage');
$myinfohover('blog','bloginfoimage');

// this event listener allowed me to change the css properties of a button and the link itself when i hovered over the div container it was in.
const $buttonglow = function(name, link, button) {
  let $name = $(`.${name}`);
  $name.hover(function() {
  $(`.${link}`).css('color','black');
  $(`.${button}`).css({'background-color':'#dbf5ff', 'color':'black'});
  }, function () {
  $(`.${link}`).css('color','white');
  $(`.${button}`).css({'background-color':"#19415C", 'color':'white'});
  })
};

$buttonglow('about', 'aboutlink', 'aboutbutton');
$buttonglow('projects', 'projectslink', 'projectsbutton');
$buttonglow('blog', 'bloglink' ,'blogbutton');

// when you hover over the profile picture, the right hero banner gets a css property tat will highlight the text. 
let $picturehover = $('.profilepic');
let $rightherobanner = $('.rightherobanner');
$picturehover.hover(function() {
  $rightherobanner.css('text-shadow','0px 0px 15px rgb(219,244,255,1)');
}, function() {
  $rightherobanner.css('text-shadow','none');
});

// this event listener listens to the window loading and will give a class slide to the profile pic that will allow the profile picture to slide up.
$(window).on('load', function() {
$('.profilepic').addClass('slide');
});


// intersection observers
let options = {
  root: null,
  rootMargin: '0%',
  threshold: 0
}

// this event will activate when the top of the 'myinfo' div intersects with the screen and will slide up the contents within the div.
let observerOne = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.aboutinfoimage').classList.add('imageslideup');
      document.querySelector('.projectsinfoimage').classList.add('imageslideup');
      document.querySelector('.bloginfoimage').classList.add('imageslideup');
      document.querySelector('.myinfoheaderabout').classList.add('myinfoslideup');
      document.querySelector('.myinfoheaderprojects').classList.add('myinfoslideup');
      document.querySelector('.myinfoheaderblog').classList.add('myinfoslideup');
      document.querySelector('.myinfoparaabout').classList.add('myinfoparaslide');
      document.querySelector('.myinfoparaprojects').classList.add('myinfoparaslide');
      document.querySelector('.myinfoparablog').classList.add('myinfoparaslide');
      document.querySelector('.aboutbutton').classList.add('myinfobuttonslide');
      document.querySelector('.projectsbutton').classList.add('myinfobuttonslide');
      document.querySelector('.blogbutton').classList.add('myinfobuttonslide');
    }
  })
}, options);

// this intersection observer listens to when the screen intersects with the top of the div with the class 'end', and will slide the whole div up.
let observerTwo = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.end').classList.add('endslideup');
    }
  })
}, options);

let targetOne = document.querySelector('.myinfo');
let targetTwo = document.querySelector('.end');

observerOne.observe(targetOne);
observerTwo.observe(targetTwo);

// when the window loads, this event will activate and slide the whole hero banner up.
$(window).on('load', function() {
  $('.herobanner').addClass('herobannerslide');
  });