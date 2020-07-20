# Kwok Ren's Portfolio Website


#### Description

Kwok's Website Portfolio is a website I created that let's audiences know who I am as a person and what kind of projects I've made using HTML, CSS, and JavaScript. The website itself is made with HTML, CSS, and JavaScript. Users can scroll down to access links to my GitHub, Linkedin, Blog, and a way to contact me. On the About Me section, you get to know me personally, and what I like to do. This project has allowed me to use my knowledge of HTML, CSS, and JavaScript and create a interactive webpage with it. I intend of updating it as I learn more developer languages and skills. 


#### Technologies

- HTML
- CSS
- JavaScript (Vanilla)
- jQuery
- GitHub Pages

#### Features

- Hovering over things have different effects
- Links to a Google Form
- Links to go to different parts of the website (such as About Me and Projects)

#### Future Implementation

- Making a proper contact form directly on the page
- Adding more effects to different things
- Refactor Code
- Keeping the website simple
- Update information (Bio, Interests, Projects)
- Adding new sections (Resume Page)


#### Inspiration Designs

Here are three different websites that I drew inspiration from. 

Link To Site  | One Thing I'd Like To Incorporate | Initial Research On That Item
| ------------- | ------------- | ------------- |
| [http://www.kaiwa-projects.com/](http://www.kaiwa-projects.com/)| I loved the big banner in the beginning and wanted something very similar to it. I also liked how his divs would also fit my screen size so it was like I was on another page!| They are just giant div containers that you would make big. Simple, but very powerful. I would model my website based on his because of how pleasing it was to fit each section to the whole page. |
|[http://www.garysheng.com/](http://www.garysheng.com/) | The sliding animations are really pleasing to look at and cool at the same time. | I would discover with the help of a friend of my (Russel Tsang) about intersection observers, which are event listeners that listen to when a element interesects with a designated root. Then, the event gets triggered. |
| [https://ana-santos.com/about/](https://ana-santos.com/about/) |  All the different types of animations when users interact with the webpage | I find the best websites the ones that you can play around with. It's an inspiration to make cool different animations when users interact with the page. Not too much so that it becomes distracting, but enough to keep the user intrigued. |
---

# The Website Portfolio

## Homepage

#### Navigation Bar

The Navigation Bar was the same throughout all the pages. What I figured out was that when I create one, I can just copy the same thing over to the other pages so that part wasn't so bad. The Navigation bar would consist of my icon, navigational links to the other pages and the hamburger menu. The icon would be part of the left side of the navigation bar, while the links would be more towards the right side of the navigation bar. The hamburger menu would only appear if the screen width was below 600px. I would need to display flex the container that consist of these divs to make it so that one would be on the left side, while the other ones would be on the right side. The hamburger menu would also be on the left, but it would not display until the screen width is below 600px. The links would disappear when the width is below 600px, and the hamburger menu would replace it. I added some hover effects to each link when you hover over them. The hover effect would scale the div up, and change the background color. One of the key things that I learned about hovering over them is to put the div with the words inside of the a element tag. That way, the whole div becomes the link, instead of just the words. 

#### Hamburger Menu

The Hamburger Menu consists of the unicode '\2630', which gives it the hamburger appearance. I don't know if this was the most efficient way to finding it, but I was searching google on hamburger menus and this popped up. My goal was to make a menu pop up when the hamburger was clicked on. I had trouble at first because I thought I could just make the links that disappear reappear in a different area when I clicked on the hamburger, but that wasn't the case. My problem was solved after I decided that the hamburger should make another div appear that was also hidden from the beginning. That div would contain the same links as the links that disappeared on the navigation bar, except this time, it would be a seperate div that would be underneath the navigation bar. I gave that div some hover effects such as changing background colors, and making the words glow. I made sure that the a element tag was surrounding the div containing the words so that the bar would give direct you instead of just the words. Initially, I did not have a X icon appear in place of the hamburger icon when you clicked on it, but that was a simple fix when I just create a jQuery function that would toggle a class that would change the content and make the unicode into an X. The click would toggle on and off and that would change the appearance between the hamburger and the X symbol. 

#### Hero Banner 

The Hero Banner was a simple div that was big enough to capture the size of your screen. I wanted my banner to be big enough, and that was it. The Hero Banner is just that, introducing users to how I look like with a picture, my name, and what my profession was. I used display flex to seperate the div that contained my picture and the div that had words in it. I added some effects to it when the window loads up, so it slides up and becomes of the first things that captures the users attention. When you also hover over the picture, the picture and the description glows up as well. Just tiny simple things that can go a long way. 

#### Information Section

I broke the information up into three different sections by using CSS Grid. The first section would be About Me, the second would be Projects, and the third one would simply be a link to my blog. I intend on replacing the one that links to my blog with my resume (once it is ready to launch). Like the Hero Banner, I wanted this whole thing to scale through the whole screen height and width. At first, it was blank because all I had was a button that linked you to where you want to go, but then I decided to add some icons on top of it. I specifically chose to find transparent ones, where I could make the edges of the icon glow using a CSS style. This made my information section look more interactive. I even made the buttons scale up when you hover over them. I made sure all my buttons were this way on all my other pages so that they would stay consistent. One of the main things I love about my website is the consistency of it all. Everything is very similar, and I really like the feel of it. When you hover over one of the grid sections, it highlights it by turning dark, so you will know which one you are hovering on. The colors become inverted. I found it very simple and pleasant. 

#### Contact Me Section

The contact me section (which is also a div that would span the entire height and width of the screen) would consist of a form that people can fill out from the site, and links to my GitHub and Linkedin. I made the form, but unfortunately, I could not get it to work without some backend knowledge. When I do have the knowledge, I will implement it straight away. In the meantime, I provided a link that will take users to a Google Form and enter their contact information there in the mean time. Under the contact section would be the footer, where there is my copyright. This copyright is the same as all the other pages. 

## About Me Page

#### Banner

The banner here is a simple div that introduces the page to the readers. I continued my trend of making a content on the screen the whole size of the screen width and height. The same goes for the banner for the Projects section. They both have a slide up effect when the window loads in. 

#### About Me

Using an intersection obsever, this section comes in when you reach the top of the div. The class it gains allows it to translate from a different y coordinate to where it is eventually. This creates a sliding effect when you add a duration to it. This div contains information about who I am, where I'm from, some background information, and what my mission is. It also includes a picture to the left side. This grid was created using CSS Grid. When you reach 720px or below, div becomes a flexbox, and the picture would be on top while the information is below it. This is a simple div to make because the bulk of it was writing out text and finding the breakpoints of the div where the text would be too big or too small. 

#### Interests

This was probably one of the most challenging things I did on this project. I'm fairly new to animations and keyframes, but I wanted to have fun with this section. At first, my idea of this section was just a simple one that listed out some interests I had, but I wanted to describe each interests more, and I didn't have the room for it. It was also very similar to how my About Me div was like above it. Just like that div, this one also slides up and into view when you intersect with the top of div using Interesection Observer. I decided eventually to use icons in this. As users click on each icon, information changes in the middle of the interests section based on which icon you chose. I added cool effects to the icon, like making it bounce using keyframes, and also hover effects. The most challenging effect I wanted for this (yet most rewarding) was to create an animation that allowed the icons to appear when the div was 50% in the screen's width and height. Not only did I want them to appear, but have them appear in different times, so some of them would have a delay to it. This taught me about CSS's property of transition and all of it's parameters, which included a delay. This section was one of my favorite sections to make, but it was also very tough.

#### Skills 

Under that, I decided to make a skills section where I could show users some programming skills I've learned recently, and the skills I hope to master in the near future. This section would be a grid as well, and I would split it up by having skills I've already learned on the left side, and skills I intend to learn on the right side. I would simply use different icons I found online and put it in there to represent what I know. To make it more fun for me personally, I decided to make it so that when you hover over the icons, they would shake. Just a little tiny addition that I hope will make users enjoy being on my website. 

## Projects Page

#### Projects Section

Under the banner, I made divs for each project I wanted to display. The divs would be made from Google Sheets and using an API to recieve those sheets. Using jQuery, you can simply fill out the google sheets, and the project would appear. For now, I am only displaying three that I am happy with. I need to make the other ones better before I can display them. In addition to the projects that are currently displayed (which also slide in when you scroll down), I plan on making a section underneath all of them in a grid where they can be showcased. This page was the most simplest to create, but it was also a challenge because I had to learn how to use an API and how I could grab different parts and put it on the page using jQuery. Intersection Observer for this page was the hardest and took me the longest to figure out because intersection observer requires the element you are targeting. However, all my elements were created in the API, and I couldn't select them before they were defined by fetch. One of the most important things I've learned while making this page interactive was about async codes and non async codes. To resolve this issue, I would have to put the selecting of the classes inside of the fetch function, so that the class would be created then, instead of outside of the function where it is not defined. This took me a while to figure out, but I am so glad I know it now for future projects. 

## The Whole Website

#### Design and Style

I made sure that I was keeping the website simple and mobile friendly. I would constantly check on my own phone whether I could interact with the pages or not. The size of the containers are friendly. The text is readable, and nothing overlaps which is the best part. The hamburger menu is simple to use, scrolling is interactive. My interests section would still be interacting, but the transition of displaying the icons would be a little different on mobile compared to desktop, but not in a bad way. The links all work properly. I also made sure that the pictures were big enough on mobile to view, and font sizes make it so that any mobile device should be able to read it. I also kept the styles simple, but using only three different colors. The two different versions of blue I had were very contrasting, so it made the website look nice. The borders I added were grey and most of them were 5px wide for consistency. I didn't want to add too much colors to everything, and tried to make it as simple as possible so I didn't have to work as much on the design, rather than the animatione effects which I feel are much better to display overall. 