# Matter of Heart Psychotherapy



*Code Institute: User Centric Frontend Development - Milestone Project*



**[Live link to deployed project](https://loosenthedark.github.io/UCFD-milestone-project/)** (hosted on GitHub Pages)



---



**Matter of Heart Psychotherapy** is the name of a recently-established therapy practice based in Dublin.

As it is still in its infancy, the business lacks any sort of tangible online presence - something that is essential nowadays towards gaining a foothold within the industry and establishing a client base. I therefore set out to build a clearly laid out webpage with two overarching objectives.

Firstly, the site should serve as a 'shop window' of sorts for the therapist, allowing him to document his educational background, relevant qualifications and professional experience, as well as outlining his approach towards treating clients.

The second fundamental aim was to provide prospective clients with an easy-to-use, concise and visually appealing portal of information, featuring digestible resources and summaries pertaining to both the broad profession of psychotherapy itself and the more specific details of what it is Matter of Heart Psychotherapy can do for them.

## UX


 
## Features

### Existing Features

+ The Bootstrap JavaScript Scrollspy plugin was enabled via `data-*` attributes in order to bring some colour and life to the `.navbar`, as well as to engender a sense of progress and flow as users navigate between the various page sections. Guidance on how to do this was obtained from the following W3Schools [reference](https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp) and [tutorial](https://www.w3schools.com/bootstrap/bootstrap_scrollspy.asp).
+ In order to create a smooth scrolling effect as users navigate between anchor links on the site, I firstly read up on [optional means of enabling this](https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link). I subsequently decided against using pure CSS due to cross-browser compatibility concerns, and instead followed the advice of [Traversy Media's YouTube tutorial](https://www.youtube.com/watch?v=y9nlfqT4s9s) in order to enable it using jQuery (see local `index.js` file for further details).
+ A fixed-position responsive `.navbar` (collapsed on extra-small and small devices; visible on landscape phones and all larger screen sizes) ensures simple, fluid movement and safeguards against users getting 'lost' anywhere within the site.
+ Several built-in Bootstrap components and JavaScript plugins were utilised to achieve certain design goals:
  + The Collapse JS plugin was used to create a functioning [`.navbar toggler icon` (aka 'hamburger icon')](https://getbootstrap.com/docs/4.0/components/navbar/#toggler) in the top right-hand corner of the screen on smaller devices. Additional styling of this icon (primarily applying a colour change to its `span` elements to ensure consistency with the site's overall colour scheme) was facilitated by this [Stack Overflow thread](https://stackoverflow.com/questions/42586729/bootstrap-4-change-hamburger-toggler-color), and in particular its [linked code demo](https://www.codeply.com/go/4FdZGlPMNV).
  + On smaller devices an [`.accordion`](https://getbootstrap.com/docs/4.0/components/collapse/#accordion-example) was created, again using Bootstrap's Collapse JS plugin, to organise and condense the information contained in the FAQ section. An extension of default `.collapse` behaviour using the `.card` component was necessary here.
  + On larger devices, a similar need was met via Bootstrap's [`.carousel`](https://getbootstrap.com/docs/4.0/components/carousel/) slideshow component, which again uses a mix of JavaScript and CSS 3D transforms to present relevant details to the user in a manner that is easy to digest and make sense of.
+ Bespoke background `:hover` effects were added behind the `iframe` media elements within the FAQ section to produce a subtle visual differentiation between embedded video and audio links. A similar, albeit more dynamic, effect was achieved in the text boxes throughout the Blog section: the custom 'sweep-to-left' and 'sweep-to-right' classes produce a sleek and symmetrical look that is pleasing to the eye. All of this was made possible thanks to [Ian Lunn's convenient collection of transitions](http://ianlunn.github.io/Hover/).
+ A complication involving an obscured/cropped `border` surrounding the Contact `form` at the bottom of the page was resolved by following the advice of [this Stack Overflow solution](https://stackoverflow.com/questions/6312067/border-radius-background-color-cropped-border).

### Features Left to Implement



## Technologies Used

1. HTML (HTML5)
2. CSS (CSS3)
3. [Bootstrap (v4.3.1)](https://getbootstrap.com/)
4. [jQuery (v3.3.1)](https://jquery.com/)
5. [Google Fonts](https://fonts.google.com/)
6. [Font Awesome](https://fontawesome.com/)
7. Hover.css: [site](http://ianlunn.github.io/Hover/) | [repo](https://github.com/IanLunn/Hover)
8. [Popper.js](https://popper.js.org/)

## Testing



## Deployment

[GitHub Pages](https://pages.github.com/) was the hosting service chosen for website deployment. The site repository's `master` branch was selected as the publishing source by following the steps detailed in [this GH Help article](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages). All new `commit`s made from the `master` branch will therefore automatically update the site.


In order to run this project locally, you can clone [the remote GH repository](https://github.com/loosenthedark/UCFD-milestone-project) for use and modification within your own local environment. This can be done quite easily by first of all changing the current working directory in your Terminal to the location where you want the cloned directory to be made. Once this is done, simply type `git clone` and then paste `https://github.com/loosenthedark/UCFD-milestone-project.git` into the command line. A more thorough explanation of all the steps involved in this cloning process can be found [here](https://help.github.com/en/articles/cloning-a-repository).

## Credits

### Content

### Media

### Acknowledgements

