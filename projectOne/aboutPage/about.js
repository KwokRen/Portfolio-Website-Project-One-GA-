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
  $('.aboutname').addClass('aboutnameslide');
})

function interestsparagraph(para) {
  let $interestspara = $('.interestspara');
  $interestspara.text(para);
}

function showtext (name, text) {
const $name = $(`.${name}`);
$name.on('click', function() {
    interestsparagraph(text)
  })
};

showtext('leader','The definition of leadership is the action of leading a group of people or an organization. Instead of being driven by the power you receive as a leader, I was instead inspired by the ability to make positive changes. As a leader, people look up to you, and it is your job to set a good example of yourself for others to follow. One of the best leadership positions I’ve ever had was with an organization I joined in college. The United Chinese Language Association (UCLA) was a club that I was a leader in, and has shaped me to becoming the person I am today. I’ve learned so much from UCLA about who I am and what kind of person I wanted to be. When I was the Vice President, the biggest priority I had was to inspire and teach future leaders all I know, so that when my term was over, the club would be in better hands than my own. To this date, I continue to seek leadership positions in hopes of leading people to be the very best version of themselves.');
showtext('gaming','Ever since I was a little kid, gaming was a big part of my life. Like how kids watched television shows afterschool, I would instead have been online playing different types of games. One of the biggest games I played when I was younger was Runescape (it’s still a pretty popular game), and I remembered how much fun it was interacting with other people online even though I didn’t know them. Gaming became a sort of escape from reality, because it allowed me to let go of any problems I was dealing with in real life. It taught me that there are good people (and bad people) in the world, but you would have to live with both. I’ve spent most of my childhood playing games and even recently, it’s always a great destressing activity for me, as well as a great way to connect with my friends I don’t get to see as often.');
showtext('workout','I find working out to be one of my favorite activities. I know a lot of people think it’s tiring and a lot of effort to put into, but I find it to be so rewarding. It feels great to use your body and to use it in a way that will only keep you healthy both physically and in the mind. I didn’t actually work out as often until recently late in the year 2019. I decided to join the local gym because I had more time on my hands, and it felt great to go every day regularly. I also found it to be a very fun activity to do with others, because even though it’s great to see yourself workout and get results alone, it’s better and easier when you do it with others. My favorite workout activities are probably the biceps and triceps. I hate shoulder and leg days. You can find me sipping on peanut butter and blueberry protein shakes.');
showtext('basketball','Basketball is my favorite sport to watch. It’s the only sport I watch in fact. There is just something very satisfying and thrilling when it comes to athletes shooting an orange ball through a hoop against one another. When I first started watching the NBA, my favorite team was the Oklahoma City Thunder because of Kevin Durant and Russell Westbrook. It broke my heart, to see KD leave (if you know, you know), but my love of watching basketball never really died. I enjoyed seeing highlights here and there. Then came the Greek Freak, and I fell in love with the Milwaukee Bucks. His mission, and his work ethics, are very inspirational and drives me as a person today. I hope he gets a ring or two soon.');
showtext('food','I love food. All types of food. Everything about food is great. The taste, the culture, and the people you eat it with. One of my favorite types of food is Korean Food. Korean food are known to be spicy. Ever since I was a little kid, my dad would build up my spice tolerance, and now I can pretty much handle anything spicy. One of my favorite dishes to get (especially in summer) is the cold noodles dish. The broth is amazing and it’s perfect for hot weather. Another favorite dish that I can go on about is sushi. I will never get tired of sushi. Spicy salmon is to die for. I would always go with my friends to all you can eat sushi buffets, and even though they aren’t the best quality sushi, it’s always a great time figuring out how to finish the last piece because we always over order.');
showtext('travel','I’ve lived my entire life in NYC. I always found myself wanting to go out and explore more because even though the city was never getting boring, it was sure getting repetitive. I recently went on a trip to Philidelphia last December around Christmas time, and I loved just being in an area I’ve never been to before. Exploring different places, feeling lost, and eating amazing food was a splendid feeling that I still yearn for today. I can’t wait to explore other places to learn about the culture, the social life there, and of course the food. There are so many places I’ve never been to in the states, and I have yet to even consider going international yet.');

function iconglow (iconname, iconnumber) {
$(`.${iconname}`).on('click', function () {
  let $class = $('.iconholder');
  $class.each((element) => {
    console.log($class.eq(element))
      if ($class.eq(element).hasClass(`${iconnumber}`)) {
      $class.eq(element).toggleClass('iconholdertoggle');
    } else {
      $class.eq(element).removeClass('iconholdertoggle');
      }
    })
  });
}

iconglow('leader','iconOne');
iconglow('gaming','iconTwo');
iconglow('workout','iconThree');
iconglow('basketball','iconFour');
iconglow('food','iconFive');
iconglow('travel','iconSix');

let options = {
  root: null,
  rootMargin: '0%',
  threshold: 0
}

let observerOne = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.aboutmeinfo').classList.add('aboutmeslideup');
    }
  })
}, options);

let targetOne = document.querySelector('.aboutmeinfo');

observerOne.observe(targetOne);

let observerTwo = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.interests').classList.add('interestsslideup');
    }
  })
}, options);

let targetTwo = document.querySelector('.interests');

observerTwo.observe(targetTwo);

let observerThree = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.skills').classList.add('interestsslideup');
    }
  })
}, options);

let targetThree = document.querySelector('.skills');

observerThree.observe(targetThree);

let optionsTwo = {
  root: null,
  rootMargin: '0%',
  threshold: 0.5
}

let observerFour = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.iconOne').classList.add('slidein');
      document.querySelector('.iconTwo').classList.add('slidein');
      document.querySelector('.iconThree').classList.add('slidein');
      document.querySelector('.iconFour').classList.add('slidein');
      document.querySelector('.iconFive').classList.add('slidein');
      document.querySelector('.iconSix').classList.add('slidein');
    }
  })
}, optionsTwo);

let targetFour = document.querySelector('.interests');

observerFour.observe(targetFour)


