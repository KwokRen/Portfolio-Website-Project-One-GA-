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



/*
https://spreadsheets.google.com/feeds/list/1xf3bZWfrVyYqUZkGcBGWdIMIEzkqu6rhF1essoyYCZc/od6/public/values?alt=json

https://docs.google.com/spreadsheets/d/1xf3bZWfrVyYqUZkGcBGWdIMIEzkqu6rhF1essoyYCZc/edit#gid=0
*/

const url = 'https://spreadsheets.google.com/feeds/list/1xf3bZWfrVyYqUZkGcBGWdIMIEzkqu6rhF1essoyYCZc/od6/public/values?alt=json';

// Russel Tsang, a good friend of mine, taught me about intersection observers

let options = {
  root: null,
  rootMargin: '0%',
  threshold: 0
}

let observerOne = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelectorAll('.projectobject')[0].classList.add('divslideup');
    }
  })
}, options)

let observerTwo = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelectorAll('.projectobject')[1].classList.add('divslideup');
    }
  })
}, options)

let observerThree = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelectorAll('.projectobject')[2].classList.add('divslideup');
    }
  })
}, options)

let observerFour = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelectorAll('.projectobject')[3].classList.add('divslideup');
    }
  })
}, options)

// Async code: Code block that activates at a different time (specifically after the non-async code);
// I had to create some jQuery variables within this async block of code because the classes didn't exist beforehand.
// This fetch function allowed me to take information translated through JSON from a google sheet and implement it to my code. 
fetch (url)
  .then(response => response.json())
  .then(data => {
    const PROJECTS = data.feed.entry.map(entry => {
      return {
        description: entry.gsx$description.$t,
        title: entry.gsx$title.$t,
        image: entry.gsx$image.$t,
        link: entry.gsx$url.$t
      }
    })
    app(PROJECTS);
    let targetOne = document.querySelectorAll('.projectobject')[0];
    let targetTwo = document.querySelectorAll('.projectobject')[1];
    let targetThree = document.querySelectorAll('.projectobject')[2];
    let targetFour = document.querySelectorAll('.projectobject')[3];
    observerOne.observe(targetOne);
    observerTwo.observe(targetTwo);
    observerThree.observe(targetThree);
    observerFour.observe(targetFour);
    $('.projectobjectlink').hover(function() {
      $('.projectobjectlink').toggleClass('linkhover');
    })
  })

// using the data provided from the google sheets, I was able to append these objects to my HTML page using jQuery.
const app = (data) => {
  const createProjectsElement = (project) => {
    const $div = $('<div>').addClass('projectobject');
    $div.append($('<img>').attr('src', project.image));
    const $divtext = $('<div>').addClass('projectobjecttext');
    const $divtitle = $('<div>').addClass('projectobjecttitle');
    const $divdescription = $('<div>').addClass('projectobjectdescription');
    const $divlinka = $('<a>').attr({'href': project.link, 'target': '_blank'});
    const $divlinkbutton = $('<button>').text('Check it out!');
    $divlinkbutton.addClass('projectobjectlink');
    $divlinka.append($divlinkbutton);
    $divtitle.append($('<h2>').text(project.title));
    $divdescription.append($('<p>').text(project.description));
    $divtext.append($divtitle);
    $divtext.append($divdescription);
    $divtext.append($divlinka);
    $div.append($divtext);
    return $div;
  }
  data.forEach(project => {
    const $projectDiv = createProjectsElement(project);
    $('.projectobjects').append($projectDiv);
  })
}

// credit to mehrdad dastgir on stack overflow https://stackoverflow.com/questions/15275956/jquery-un-hover
// this event listener listens to when you hover over the divs on the nav bar when it is not in hamburger mode, which changes the color of the text to black.
const $desktophover = function(name, letter){
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
// this event listeners listens to when the window loads and gives the class to the div with the class projectsname so it slides up. 
$(window).on('load', function() {
  $('.projectsname').addClass('projectsnameslide');
})
