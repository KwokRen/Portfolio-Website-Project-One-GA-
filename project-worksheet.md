# Project Overview
Building a website using the skills learned from unit one of the course. The website will include different sections that overall display you as a person and the projects you've made. This website will be your portfolio.
## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description / Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Skeleton HTML, CSS, JavaScript | Complete
|Day 3| Media Queries | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

This website application I am creating is to help me display skills that I've learned during the first unit of the General Assembly SEI bootcamp. The website features several things such as: 
-  About Me page 
-  Projects page
-  Contacts


## Google Sheet

[Google Sheet](https://docs.google.com/spreadsheets/d/19e4t4KraAs82HfJFbNtUUlCGuqxu0JTm1UD7AuunRUk/edit?usp=sharing) 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

[Mobile Rough Draft](https://res.cloudinary.com/dpggcudix/image/upload/v1594599888/Screen_Shot_2020-07-12_at_8.20.40_PM_x9cho7.png)

Using Flexbox, I was able to make a column of divs. I changed the font size based on size of media, and and was able to fit it all within the screen of a iPhone X. It works for a width lower than an iPhone X as well. The hamburger menu will also appear as well for menu scrolling convinience.

[Tablet Rough Draft](https://res.cloudinary.com/dpggcudix/image/upload/v1594599888/Screen_Shot_2020-07-12_at_8.10.29_PM_ijmz28.png)

Very similar to what I wanted my desktop to look like, it just has some sizing differences between the divs and the banner looks a little more compact which is fine. 

[Desktop Rough Draft](https://res.cloudinary.com/dpggcudix/image/upload/v1594599888/Screen_Shot_2020-07-12_at_8.20.53_PM_gwacil.png)

A navigation bar on top, the middle is a banner, below that are some blocks I did with CSS Grid to go to different pages in the same site. Finally, there is a contact section below that. 


## Time/Priority Matrix 

[Time Matrix](https://res.cloudinary.com/dpggcudix/image/upload/v1594601691/Screen_Shot_2020-07-12_at_8.52.52_PM_ujpvxd.png)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Using Google Sheets API
- Homepage
	- Navigation Bar
		- About Me Link
		- Projects Link
		- Contacts Link
		- Icon/Logo
	- Pictures
- About Me Page
	- Navigation Bar
		- Hamburger Menu as Mobile
	- Description of myself
	- Pictures
	- Skills
- Projects Page
	- Navigation bar
	- Using CSS Grid to display different projects
	- Link to the Application itself and GitHub
- Contacts
	- Same page as homepage
	- Link will allow you to scroll down
	- Link to social media platforms
	- Message Me
- Linking my blog
	- Link to blog website
- Media Responsiveness
	- Mobile first
	- Tablet
	- Desktop
- Refactor Code
- Deployment

#### PostMVP 

- Sliding transitions
- Consistent color schemes
- Clean and simple layout
- Play around with different transitions
- Work on Hovering over features
- 
## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Homepage | H | 5hr | 5hr | 5hr|
| Navigation Bar | H | 2hr | 1hr | 1hr|
| Icon | L | 4H | 1hr | 1hr|
| Navigation Bar Links | H | 1hr| 0hr | 0hr |
| About Me Page| M | 3hr | 2hr | 2hr|
| Working with API | H | 4hrs| 2hr | 2hr |
| Media Responsive | H | 5hr | 5hr | 5hr|
| Social Media Icons | L | 1hr | 0hr | 0hr|
| Projects Page | M | 3hr | 3hr | 3hr|
| Contacts | M | 2hr | 1hr | 1hr|
| Deployment | M | 2hr | 0hr | 0hr|
| Total | H | 32hrs| 20hrs | 20hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Sliding transitions | M | 6hr | 6hr | 6hr|
| Consistent color schemes | L | 1hr | 1hr | 1hr|
| Clean and Simple Layout | L | 3hr | 2hr | 2hr|
| Different Transitions | L | 3hr | 3hr | 3hr|
| Hover | M | 3hr | 3hr | 3hr|
| Total | H | 16hrs| 15hrs | 15hrs |

## Additional Libraries

Bootstrap: I used bootstrap to help organize my containers better and to make it look better when working on media queries. It was also a con because I had to overwrite some pre-existing CSS styles that came with bootstraps such as links. Overall, it helped me get a good feel of the structure of the page.

jQuery: I used jQuery to add dynamic effects to the page. It's allowed me to change certain CSS styles while it listens to how the user interacts with the webpage. 

Font Awesome: I used some Font Awesome icons to display on the page and have them as buttons that take users to different websites.

## Code Snippet

On my homepage, I wanted some icons to glow up when I hovered over the div that it was in. At first, I tried to find whether box-shadow or text-shadow would help me out, but neither of them did. I went on Google and searched to see if there was any way I could make icons glow up, and it took me to a person explaining you could on Stack Overflow. He explained that if the Icon was transparent (which I made sure was the case), I would be able to give the icons a filter with a drop shadow that would give a shadow perception very similar to how box-shadow and text-shadow worked. I tried it, and I thought it was cool that I could make icons glow up. One of the more aesthetically pleasing CSS styles out there that I've learned throughout working on this project. 

```
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

```

## Issues and Resolutions

Some of the major issues I've actually encountered were more on the CSS side of things. Bootstrap had pre-existing CSS Styles written into some elements such as whenever you create links. The links would automatically have a style of making it a blue color, and the link would have a text-decoration of a line that I would want to get rid of. My first encounter with the problem was my only major problem with it. I had tried to change the styles of the div that the link was in, but I did not realize until after experimenting that I had to change the link styles themselves. I wasn't specific enough when I was selecting the div it was in, so the styles wouldn't change. Then it just became annoying afterwards when I had change all of the links.

I made an About Me Page where you could hover over certain icons to get to know me better. Each icon would bring out a different text that you could read, and I decided I wanted to add some CSS animation effects to them. I realized that when I was doing transition all, all the effects were effected by it. I had to isolate some effects so that they wouldn't effect others. My problem was that I had a delay on all the effects due to the transition all style I wrote. It would make a button that was suppose to remove the background color delay for a few seconds, which was not my intention. I solved it by just seperating transitions by their own property, and not by just calling all. I was used to doing all because I didn't consider the effect it would have with all the styles, but now I plan on doing it more individually because it's easier to work around incase you want different transition points at different times. 