<base target="_blank">

# Project Portfolio by React

<a href="#description">Description</a> •
<a href="#key-features">Key Features</a> •
<a href="#usage">Usage</a> •
<a href="#technologies-used">Technologies Used</a> •
<a href="#concepts-demonstrated">Concepts Demonstrated</a> •
<a href="#credits">Credits</a> •
<a href="#author">Author</a>

---

[Live Project Portfolio](https://geminiad.github.io/react-portfolio/)

![Project Portfolio Desktop Demo](./assets/images/react-portfolio-desktop-demo.gif)

---

## Description

This site is the second project portfolio I've made. I created it using just react, html, and css. There's a section about me, a section with a sampling of projects I've worked on, a contact form, and a section listing my skills along with a link to download my resume.

It represents the culmination of everything I've learned so far as far as CSS is concerned:

- I made the footer stick to bottom of the page but scroll with the content.
- I have some neon text effects for the headers that make them look like neon signs using text-shadow.
- I properly set the background image for the main content by setting the position to the center of the page, setting the background-attachment to fixed, and setting the background-size to cover so it doesn't stretch awkwardly when the browser window is resized.
- I used a glowing effect on hover for the footer icons using keyframe animations and text-shadow.
- I used a blur effect using backdrop-filter to create a 'frosted glass' effect for each content section.
- For each project card, I used absolute positioning to position the github link, project title and project technologies over each card, and I had to use some complex css selectors to ensure that when the mouse moves over each absolutely positioned item, the others stay visible. I also reduced the brightness of the image on hover and increased the size of each card slightly using the scale css function.
- Finally, I used media queries to make sure no elements overlap one another when the window is resized or the site is viewed on a mobile device.

## Usage

Navigate to https://geminiad.github.io/react-portfolio/. Click on the navigation links in upper-right hand corner to switch to different sections. The links in the footer lead to my GitHub, LinkedIn, and Facebook profiles, respectively. If you click on any of the project cards, you're taken directly to the deployed application. If you hover over a project a GitHub icon pops up; click on that and you're taken to the GitHub repository for that project. That's about it.

## Technologies Used

- [React](https://reactjs.org/) to render the content and manage the state of the page and some subcomponents.
- Vanilla [Bootstrap](https://getbootstrap.com/) for the card component, one button which I haven't customize yet, and their column layout system.
- A lot of CSS and its functions, including calc, text-shadow, box-shadow, blur, animations, transtitions, scale, setting an image brightness, and CSS selectors such as :not, the sibling selector (~), the child selector (>).
- JavaScript.
- HTML.

## Concepts Demonstrated

- Knowledge of [React](https://reactjs.org/).
- Strong grasp of a small slice of CSS including positioning, media queries, how to best display images across a wide variaty of screen resolutions, and CSS selectors.

## Credits

- [Russ Pate](https://codepen.io/russpate) for a [box and shadow grow on mouse hover effect](https://codepen.io/russpate/pen/qRaepv).
- [Ananya Neogi](https://codepen.io/ananyaneogi) for a sick-looking [yellow-orange neon sign glow effect](https://codepen.io/ananyaneogi/pen/Bgozrz) I stole.
- [Erik Jung](https://codepen.io/erikjung) for some color combinations for text-shadows that I stole to make more [realistic-looking neon-signs](https://codepen.io/erikjung/pen/XdWEKE).
- [Nodwys](https://codepen.io/nodws) for the [neon sign font, drop-shadow effect, and inspiration for the neon-sign against a brick background that I used](https://codepen.io/nodws/pen/WNjXbr).

## Author

Adam Ferro

- [Github](https://github.com/GeminiAd)
- [Linked-In](https://www.linkedin.com/in/adam-ferro)
