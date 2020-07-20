let $hamburger = $('.hamburger');
    $hamburger.on('click', function(e) {
    let $hamburgermenu = $('.hamburgermenu');
    $hamburgermenu.toggleClass('shown');
    $hamburger.toggleClass('hamburgercrossed')
      }
    );  


$(window).resize (function(e) {
  if ($(window).width() < 600) {
    $('.hamburgermenu').removeClass('shown');
  }
});

 

// credit to mehrdad dastgir on stack overflow https://stackoverflow.com/questions/15275956/jquery-un-hover

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

let $picturehover = $('.profilepic');
let $rightherobanner = $('.rightherobanner');
$picturehover.hover(function() {
  $rightherobanner.css('text-shadow','0px 0px 15px rgb(219,244,255,1)');
}, function() {
  $rightherobanner.css('text-shadow','none');
});

let connectlink = document.querySelector('#desktopshowhoverC');
connectlink.addEventListener('click',function() {
  let connect = document.querySelector('.connect');
  let distance = window.pageYOffset + connect.getBoundingClientRect().top;
  window.scrollTo(0, distance);
})

$(window).on('load', function() {
$('.profilepic').addClass('slide');
});

let options = {
  root: null,
  rootMargin: '0%',
  threshold: 0
}

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

$(window).on('load', function() {
  $('.herobanner').addClass('herobannerslide');
  });