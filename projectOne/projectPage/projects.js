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



/*
https://spreadsheets.google.com/feeds/list/1xf3bZWfrVyYqUZkGcBGWdIMIEzkqu6rhF1essoyYCZc/od6/public/values?alt=json

https://docs.google.com/spreadsheets/d/1xf3bZWfrVyYqUZkGcBGWdIMIEzkqu6rhF1essoyYCZc/edit#gid=0
*/

const url = 'https://spreadsheets.google.com/feeds/list/1xf3bZWfrVyYqUZkGcBGWdIMIEzkqu6rhF1essoyYCZc/od6/public/values?alt=json';

// Russel Tsang

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

// Async code: Code block that activates at a different time (specifically after the non-async code);

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
    observerOne.observe(targetOne);
    observerTwo.observe(targetTwo);
    observerThree.observe(targetThree);
    $('.projectobjectlink').hover(function() {
      $('.projectobjectlink').toggleClass('linkhover');
    })
  })

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

$(window).on('load', function() {
  $('.projectsname').addClass('projectsnameslide');
})
