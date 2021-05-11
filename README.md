# Matter of Heart Psychotherapy



**[Live link to deployed project](https://loosenthedark.github.io/matter-of-heart-psychotherapy/)** (hosted on GitHub Pages)

**[Alternative link](http://loosenthedark.tech/matter-of-heart-psychotherapy/)** (hosted on loosenthedark.tech)


---



**Matter of Heart Psychotherapy** is a recently-established therapy practice based in Dublin.

As it is still in its infancy, the business lacks any sort of tangible online presence - something that is essential nowadays towards gaining a foothold within the industry and securing a client base. I therefore set out to build a clearly laid out webpage with two overarching objectives.

+ Firstly, the site should serve as a 'shop window' of sorts for the therapist, allowing him to document his educational background, relevant qualifications and professional experience, as well as outlining his approach towards treating clients.

+ The second fundamental aim was to provide prospective clients with an easy-to-use, concise and visually appealing portal of information, featuring digestible resources and summaries of both the profession of psychotherapy itself and the more specific details of what Matter of Heart Psychotherapy can do for them.

## UX

In consultation with the site owner during the project's initial planning stages, he told me how he wanted "something that stands out from the typical generic appearance of most psychotherapy sites with their bland pastel colours and Buddha and waterfall images". He also mentioned a preference for incorporating a vaguely art deco aesthetic if possible. These considerations collectively informed my choice of colours, fonts, images etc. to design a website with a distinctive feel and coherent structure.

As with any website, a number of user needs existed prior to construction. These needs are best summarised in the following three core User Stories:

1. _"As site owner, I need a welcoming, informative and user-friendly webpage where I can showcase my therapy practice by providing details about my background, qualifications and therapeutic approach. I would also like a means of preemptively answering a range of common queries that prospective clients are likely to have. My desired outcome will be an increase in my client base and overall growth of the company profile."_
2. _"As someone who knows a bit about psychotherapy and/or has availed of therapy before, I am looking to find out more about Matter of Heart Psychotherapy with a view towards potentially booking an appointment. In addition, I would like to be able to follow this practice on social media. My browsing time is very limited, and I generally access the web on my iPhone."_
3. _"As someone who knows little or nothing about psychotherapy, I would like to learn about what is involved in order to decide whether it is something I wish to avail of. I would also like the option of maybe booking an appointment if I am suitably motivated to do so. Ordinarily I use my work laptop for online research, but I have also recently bought a tablet."_

These three overlapping sets of requirements dictated how I set about devising the site's layout. Adopting a mobile-first approach, I strived to maintain a flexible balance between displaying too little and too much information - simultaneously keeping in mind screen size limitations on smaller devices as well as competing end user needs. Targeted use of Bootstrap components like the `.accordion` and `.carousel` made factoring in and meeting these needs more manageable, while I was also able to take advantage of the Bootstrap grid and default display classes to make content visible or hidden as appropriate.

 
## Features

### Existing Features

+ The Bootstrap JavaScript Scrollspy plugin was enabled via `data-*` attributes in order to bring some colour and life to the `.navbar`, as well as to generate a sense of progress and flow as users navigate between the various page sections. Guidance on how to do this was obtained from the following W3Schools [reference](https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp) and [tutorial](https://www.w3schools.com/bootstrap/bootstrap_scrollspy.asp).
+ In order to create a smooth scrolling effect as users navigate between anchor links on the site, I firstly read up on [optional means of implementing this](https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link). I subsequently decided against using pure CSS due to cross-browser compatibility concerns, and instead followed the advice of [Traversy Media's YouTube tutorial](https://www.youtube.com/watch?v=y9nlfqT4s9s) in order to enable it using jQuery (see local `index.js` file for further details).
+ A fixed-position responsive `.navbar` (collapsed on extra-small and small devices; visible on landscape phones and all larger screen sizes) ensures simple, fluid movement and safeguards against users getting 'lost' anywhere within the site.
+ Several built-in Bootstrap components and JavaScript plugins were utilised to achieve certain design goals:
  + The Collapse JS plugin was used to create a functioning [`.navbar toggler icon` (aka 'hamburger icon')](https://getbootstrap.com/docs/4.0/components/navbar/#toggler) in the top right-hand corner of the screen on smaller devices. Additional styling of this icon (primarily applying a colour change to its `span` elements to ensure consistency with the site's overall colour scheme) was facilitated by this [Stack Overflow thread](https://stackoverflow.com/questions/42586729/bootstrap-4-change-hamburger-toggler-color), and in particular its [linked code demo](https://www.codeply.com/go/4FdZGlPMNV).
  + For smaller devices an [`.accordion`](https://getbootstrap.com/docs/4.0/components/collapse/#accordion-example) was created, again using Bootstrap's Collapse JS plugin, to organise and condense the information contained in the FAQ section. An extension of default `.collapse` behaviour using the `.card` component was necessary here.
  + On larger devices, a similar need was met via Bootstrap's [`.carousel`](https://getbootstrap.com/docs/4.0/components/carousel/) slideshow component, which uses a mix of JavaScript and CSS 3D transforms to present relevant details to the user in a manner that is easy to digest and make sense of.
+ Bespoke background `:hover` effects were added behind the `iframe` media elements within the FAQ section to produce a subtle visual differentiation between embedded video and audio links. A similar, albeit more dynamic, effect was achieved in the text boxes throughout the Blog section: the custom 'sweep-to-left' and 'sweep-to-right' classes produce a sleek and symmetrical look that is both pleasing to the eye and organisationally sound. All of this was made possible thanks to [Ian Lunn's handy collection of Hover.css transitions](http://ianlunn.github.io/Hover/).
+ A minor complication involving an obscured/cropped `border` surrounding the Contact `form` at the bottom of the page was resolved by following the advice of [this Stack Overflow solution](https://stackoverflow.com/questions/6312067/border-radius-background-color-cropped-border).

### Features Left to Implement

As the business grows and the website evolves further, I can envision the need to add or improve each of the following three features:

+ **`.navbar-brand` logo**: At present, this is fairly basic and nondescript due to time and development resource constraints. In the near future, however, I would like to implement a more fully-formed and striking Matter of Heart Psychotherapy ('MofH') branded logo that is conspicuous while still being in keeping with the site's general typography and aesthetic.
+ **Expansion/Customisation of Blog section**: For the time being, the blog has been populated with somewhat generic 'filler' content taken from Wikipedia. The hope is that it can be enhanced through the creation and addition of more personalised and tailored blog entries that appeal to MofH clients more effectively. These blog posts could then be pushed to the business's various social media channels to boost the site's reach and ultimately entice more clients. Fortunately, such long-term design considerations have been factored into the site's information architecture from the start; as a result, all existing blog content can be flexibly added to or displaced by more appropriate material without disrupting the site's core structure or jeopardising its visual impact.
+ **[Google Maps Embed API](https://developers.google.com/maps/documentation/embed/start)**: Obviously, any business looking to get off the ground and thrive will generally need a street address of some sort. At the moment, a permanent location for MofH has yet to be finalised. Once an address has been confirmed, I plan on alerting site visitors to its location using a Maps API. Ideally, this would be situated somewhere adjacent to the Contact form towards the foot of the page, [a bit like this](https://www.albapsychotherapy.ie/contact-me/). Once again, Brad from Traversy Media has put together [a pretty comprehensive video tutorial](https://www.youtube.com/watch?v=Zxf1mnP5zcw) on how to do this, which I will look to follow when the time comes for implementation.

## Technologies Used

1. HTML (HTML5)
2. CSS (CSS3)
3. [Bootstrap (v4.3.1)](https://getbootstrap.com/)
4. [jQuery (v3.3.1)](https://jquery.com/)
5. [Google Fonts](https://fonts.google.com/)
6. [Font Awesome](https://fontawesome.com/)
7. Hover.css: [site](http://ianlunn.github.io/Hover/) | [repo](https://github.com/IanLunn/Hover)
8. [Popper.js](https://popper.js.org/)
9. [Autoprefixer](https://autoprefixer.github.io/)

## Testing


All testing was performed manually, and on a near-constant basis as the project evolved. Frequent use of [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2) was central to this testing process, while ongoing testing of the site's responsiveness was conducted using [Responsinator](https://www.responsinator.com/).

Additionally, the site was tested in a variety of browsers (Chrome, Safari, Firefox, Amazon Silk) across several devices and screen sizes (Samsung Galaxy S5, iPhone 7 Plus, Huawei P20, MacBook Pro, iPad, Kindle Fire) to ensure compatibility.

[W3C](https://www.w3.org/)'s [Markup Validation Service](https://validator.w3.org/) was used to test the validity of all HTML used in this project. The code was [validated by direct input](https://validator.w3.org/#validate_by_input), and all suggested corrections were then made.

In a similar manner, the website's CSS was checked for errors using [W3C](https://www.w3.org/)'s [CSS Validation Service](https://jigsaw.w3.org/css-validator/). Once again, [validation by direct input](https://jigsaw.w3.org/css-validator/#validate_by_input) was the preferred method selected, and all necessary changes were subsequently carried out.

In terms of addressing the goals outlined above in the core User Stories, the following can all be said to have been rigorously tested and verified throughout the design process:

1. _"As site owner, the landing page boasts eye-catching `header` branding, as well as a motivating synopsis of why the user should choose to enlist my services. There is a prominent call-to-action `button` along with a secondary 'Read More' prompt encouraging the user to explore the site further. My academic and professional background, together with a bitesized account of my integrative approach, can all be viewed in the About Me section, which also features a professional-looking photo of me. Again, there is a well-positioned call-to-action `button` here, should the user wish to book an appointment right away. Still-undecided users can navigate further to the FAQ section, where they can browse a host of detailed and relevant answers to some of the questions they may have in relation to the practice. There are also a couple of explainer media links for those who wish to avail of additional resources. Towards the bottom of the site, a well-organised Contact form makes both getting in touch and booking an appointment quick and uncomplicated, while a supplementary Blog section and social media links enable me to consolidate my web presence and increase client retention rates."_
2. _"Having undergone therapy several years ago, I had heard about Matter of Heart through word-of-mouth and was keen to learn more about the practice. I found the site easy to navigate and visually appealing. The `.accordion` layout of the FAQ section conveniently allowed me to skip past the basic general queries about psychotherapy as a whole and focus instead on the more specific questions I had about this business. As an active social media user, I immediately decided to follow Matter of Heart on both Facebook and Twitter once I spotted the icons at the foot of the page, since I rely on notifications from these channels to stay up-to-date. Although I haven't yet booked my first appointment, I will probably do so in the coming days, as I can see that the booking process is smooth and straightforward."_
3. _"This being my first visit to a psychotherapy website, I was pleasantly surprised by the array of reassuring and instructive content available. The FAQ `.carousel` contained a lot of detail presented in a compact manner. Likewise, the About Me section reassured me about the therapist's credentials and made me consider booking an introductory session. The following day, when I had more time available, I returned to the site to watch the embedded video explaining 'How Psychotherapy Works', and that was enough to convince me to schedule an appointment."_

From a practical standpoint, best UX practice was followed to ensure that all external links open in a separate browser tab, thus preventing users from inadvertently leaving the site. This was implemented through sitewide use of the `target="_blank"` attribute. Again, this was systematically checked and verified throughout the project's duration. All internal buttons and links to elements with IDs within the page itself were similarly tested to confirm they are pointing to the correct section. A decision was also made on design grounds to remove default CSS `text-decoration` styling (i.e. underlines) from all website links.

HTML5 form validation was applied to the site's Contact form in line with current [Bootstrap documentation](https://getbootstrap.com/docs/4.0/components/forms/#validation). Thorough testing was then conducted prior to deployment to ensure the following:

+ If a user tries to submit a contact request by clicking the 'Send Message' `button` **without completing any of the form's `input` fields**, a feedback message will appear indicating that unfilled forms may not be submitted.
+ Likewise, since all `.form-control` elements contain a `required` attribute, attempting to submit the form **with just a single invalid `input` field** will also return a feedback message asking users to please fill the form in correctly. Thus:
  + A valid `text` entry must be provided when filling out the 'Name' field
  + A valid `email` address must be provided when filling out the 'Email' field
  + The form's drop-down list requires users to select a valid option from the available menu
  + A valid message must be entered in the `textarea` field prior to submission - otherwise a "Please fill in this field!" alert will again appear underneath.

One other form design aspect worth mentioning is that, since this is a static frontend site for the time being, form submission functionaility is currently limited. With this in mind, and in lieu of adding a redundant modal plugin element to the page, an extended `placeholder` message (visible on larger devices) was supplied in the `textarea` box informing users that all submitted contact requests will be responded to "as soon as possible".


## Deployment

[GitHub Pages](https://pages.github.com/) was the hosting service chosen for website deployment. The site repository's `master` branch was selected as the publishing source by following the steps detailed in [this GH Help article](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages). All new `commit`s made from the `master` branch will therefore automatically update the site.


In order to run this project locally, you can clone [the remote GH repository](https://github.com/loosenthedark/matter-of-heart-psychotherapy) for use and modification within your own local environment. This can easily be done by first of all changing the current working directory in your Terminal to the location where you want the cloned directory to be made. Once this is done, simply type `git clone` and then paste `https://github.com/loosenthedark/matter-of-heart-psychotherapy.git` into the command line. A more thorough explanation of all the steps involved in this cloning process can be found [here](https://help.github.com/en/articles/cloning-a-repository).

## Credits

### Content

All text featured across the Landing (Home), About Me and FAQ sections was provided by the site owner, with some minor edits made by me during construction. The text featured in the blurbs throughout the Blog section is copied from the introductions to relevant Wikipedia articles - each of which is linked to via its accompanying 'Read More' button.

### Media

The profile image of the site owner was provided by him directly - some vertical cropping was later applied by me. The two logo images positioned below this lead image were sourced from the corresponding organisations' websites, namely [Irish Association for Counselling and Psychotherapy](https://www.iacp.ie/) ([image link](https://www.iacp.ie/images/logo.png)) and [Dublin Business School](https://www.dbs.ie/) ([image link](https://www.dbs.ie/images/default-source/logos/dbs-logo-2019-small.png)).
All other images used, namely the background images in the Landing and Contact sections and the box divider images in the Blog section, were taken from [Pexels](https://www.pexels.com/), a free-to-use library of high-quality stock photos.


The two embedded media files featured in the FAQ section on larger devices were taken, respectively, from [YouTube](https://www.youtube.com/watch?v=g-i6QMvIAA0) (video) and [SoundCloud](https://soundcloud.com/user-685330905/what-is-psychotherapy) (audio), and are both linked to clearly and appropriately.


Font Awesome Icons were inserted alongside the media files in the FAQ section and across the top of the Contact form on larger devices, as well as in the text boxes throughout the Blog section and along the `footer`.


The `shortcut icon` (favicon) displayed in the website's tab was supplied with permission by [Gregor Cresnar](https://www.flaticon.com/authors/gregor-cresnar) of [Flaticon](https://www.flaticon.com/).


Finally, [TinyJPG](https://tinyjpg.com/) proved to be an indispensable resource for compressing image files prior to upload in order to speed up site load time. This process was applied to almost all images used in this project.


### Acknowledgements

Thanks to my mentor Antonio for his timely feedback, encouragement and recommendations throughout this project. Anto pointed me towards [WrapBootstrap](https://wrapbootstrap.com/) for browsing a wide selection of Bootstrap templates and themes, which provided plenty of inspiration. It was also he who suggested I should use Responsinator for testing site responsiveness throughout the construction process, and this turned out to be an invaluable tool.
