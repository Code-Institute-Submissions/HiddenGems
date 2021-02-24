# HiddenGems
Find and rate lesser-known movies.


## Site Owner Goal
The site owner is looking to bring together a group of like-minded movie lovers. The objective is to have the users make entries to the site, comprising of movie recommendations for good, lesser-known movies.

The site owner is then able to build their own database of great movies, with a user base for possible future ventures also.

A side benefit will be the addition of a voting system so that users can agree or disagree with other peoples contribution. Using this, the site owner will generate a list of 'top voted' movies to fine-tune future movie choices.

The site-owner will want for users to create accounts, both for data capture and in order to keep the voting fair. A user will only be able to vote on a particular film once. 
Update - Validation has been added to prevent upvotes from being continually clicked however it has not been limited to one per user - See 'Future Updates'

The site-owner will also want to keep content clean, meaning the owner will look at restricting certain words to attempt to facilitate this.


## User Stories
Two main user types are envisioned. One type, henceforth known as a contributor, is interested in adding to the site, having their recommendations known.

The other type will be known as consumers, visiting the site in order to browse the exisiting recommendations and use them for their own viewing choices.

Both types will likely vote to agree or disagree with other users contributions.


These Stories will be brief touchpoints of what the user is looking for from this site. The full walkthrough is later in the readme of the entire completed journey.

### Contributor
- A contributor will visit the site with a primary motivation to add their entry
- They will want to be able to add their choice in the most straightforward method possible. Anything the site does to make this easier will add to user enjoyment
- They may wish to add a short review of the movie to explain why they see the film as a worthwhile watch.
- The ability to view their entry after submission would be useful, possibly edit it also.
- As such, they will look to login, or create an account if they do not have one in order to keep track of their entry/entries and amend them accordingly, if needed.
- In their account, they would want to see if other users have voted to agree with them or not.
- They likely will also wish to use the data on the site as a consumer would - see below.

### Consumer
- A consumer will visit the site in order to find films that they may want to watch.
- They will want this information presented to them in a straightforward manner.
- They will want to look at the best-voted movies on the site, perhaps along with the newly added ones that they perhaps haven't seen on previous visits.
- If this doesn't fulfil their need, they may look to browse the movies by genre, or search by name if perhaps they have something specific in mind.
- The consumer could potentially also wish to vote to agree or disagree with a film that they may have seen here before. They will need to create an accout in order to meet site owner goals.


## Site Layout
It was decided to go with a darker theme on this occasion. This was partly inspired by IMDBs dark format, where the bright movies stand out and the background doesn't detract from the viewing experience. 

The site uses Flask's template model, where the base.html holds the brand, navigation and footer. These features follow traditional web conventions where the logo is top left, and can be used to navigate to the home page, the navigation to it's left for navigating across the site.

Where previous projects have seen a static explanation for how to utilise the site, I decided to have several images on a scrolling carousel. This moves automatically or at the user's prompting to allow information to be presented at the user's speed.

The main content is directly below, where the user can see the newest movies (AKA 'Gems') added to the site. The cards present basic identifying information for a casual glance, with a link to see more information. Should they click this, they can see additional details such as the name of the user who added the movie, along with their review if they chose to leave their opinion. Links to the imdb page for even more information, along with the option to go back are found at the base of this information card.

Back on the main cards, should the user agree with the movie as a good choice, they have the option to click and upvote. This pushes the movie up the rankings as popular, where the most popular choices can be seen in the next category down the page.

On both of these categories, there is a 'see more' button, where they can view an additional row of movies should they wish to.

Below this, movies of each of the sites named categories can be found,should the user be wanting to look at a particular genre.

If the 'Consumer' type user wishes to see if a particular movie exists on the site, or a 'Contributor' wishes to check the same before they add their recommendation - they are able to search by title on the 'Search' option in the navigation.

Once logged in on the 'Login' page, or 'Register' for first-time users, additional options are made available.

Contributors can then head to 'Add Movie', where they can type some or all of the movie name and get the top results from the IMDb API. They simply select their intended listing, choose from a category list, add a review if they wish and submit to have the movie showing on the site. They can navigate to 'Manage Movies' to see their listings, along with editing and deleting if required.


## Design Decisions

### General Design
As mentioned above, a darker theme was selected, with the movie cards and the text across the site standing out in white. The intention was to be eye-catching and engaging, which i believe has been achieved.

I have stuck with the Lato text throughout as a professional-looking font and utilised bootstrap cards throughout the site to ensure that where content is generated, it looks consistent and is responsive on as many types of device as possible.

Early on in the design stage, I wanted to try to make it as easy as possible for users to submit information. Linking up to the IMDB API seemed like a good way to do this, meaning that users are easily able to add their recommendations, whilst the site appears filled with content with no large gaps in information. I could imagine a site where people fill the required gaps with incomplete, or incorrect information and wanted to try and stay away from this, if possible.




### Wireframes

As you can see from the wireframes, the dark theme was decided afterwards but the main feel for the site remains the same as the early mockups.

While a downvote options can be noted on the wireframes, it was decided to forego this to try to promote a more positive environment.

There was also going to be images on most of the pages, but this idea was dropped for a cleaner look.

#### Desktop

HomePage

![image](https://user-images.githubusercontent.com/61311614/109068574-f8492c00-76e7-11eb-9d87-2801b20cb655.png)

![image](https://user-images.githubusercontent.com/61311614/109068635-08f9a200-76e8-11eb-8d33-dd998e476345.png)

Search 

![image](https://user-images.githubusercontent.com/61311614/109068765-32b2c900-76e8-11eb-9d06-85de01110d22.png)


Profile

![image](https://user-images.githubusercontent.com/61311614/109068829-4a8a4d00-76e8-11eb-9636-c53df72a96be.png)





#### Mobile

HomePage

![image](https://user-images.githubusercontent.com/61311614/109070582-976f2300-76ea-11eb-8673-8e11dc4f96f6.png)

![image](https://user-images.githubusercontent.com/61311614/109070630-a2c24e80-76ea-11eb-872a-0c5b338b7cf2.png)

![image](https://user-images.githubusercontent.com/61311614/109070666-b077d400-76ea-11eb-8c44-b18ea87654b8.png)

Add Movie Page

![image](https://user-images.githubusercontent.com/61311614/109072002-5c6def00-76ec-11eb-88ad-396838736cda.png)

![image](https://user-images.githubusercontent.com/61311614/109071860-2d577d80-76ec-11eb-882b-63a93fc1c102.png)










### Technologies used

- Repl.it - this was the chosen development platform.
- Bootstrap for site layout, container code, navbar functions - used throughout for rich content and responsive behaviour.
- JQuery addon used for rich function searching in order to appropriately target html and CSS for site functionality.
- GitHub - utilised for cloud backups and project progression.
- Realfavicongenerator.net - used to correctly generate site favicon
- Mockplus Classic - Used for wireframes of the project - possibly the best free option so far in my opinion.


## Testing

### Validation service

#### HTML


#### CSS


#### JavaScript


#### Wave(WebAIM) validator



#### Internal custom validation




### Page links



### Responsiveness 


### JavaScript tests



### Browsers



### Testing that GitHub pages matches development version.



## Known issues



## Future improvements
- Improve the search function. Take it from it's basic movie name form now to including actors, year etc. This could be done through a more in-depth index on the database, however the page would need to be revamped to handle the results. The current format fulfils the basic user need.
- The main movies page is quite repetitive code-wise. This could be cleaned up with storing the movie cards as a block variable, for example. Inital tests of this principle found getting the 'movie.*' notation difficult. Finding another method to clean this up would be an excellent improvement going forward.
- Currently, the upvote system is subject to users not utilising it correctly - someone with an intent to upvote their own movie multiple times could do so. Restricting the upvote to logged in users, and registering who has upvoted then blocking future upvotes from them would be a way around this. This would also require a revamp of the current JavaScript which increments the vote without page refresh also.

The user at present is disabled from upvoting the movie again without a page reload. This will deter some people, but those who wish to continuously upvote could do so with a refresh.


## Deployment Procedure



## User story walkthroughs





## Conclusion



## Attribution

- Assistance with card images lining up to the left:
https://stackoverflow.com/questions/49141874/bootstrap-4-card-panel-with-image-left-of-header-and-title

- IMDB API assistance found at:
https://stackoverflow.com/questions/1966503/does-imdb-provide-an-api

- Assistance with jinja list sorting:
https://stackoverflow.com/questions/1959386/how-do-you-sort-a-list-in-jinja2

- countDocument help found at:
https://stackoverflow.com/questions/25163658/mongodb-return-true-if-document-exists

- Information for a single button to run JS, then load a href found at:
https://stackoverflow.com/questions/14867558/html-tag-a-want-to-add-both-href-and-onclick-working

- Flexible footer - needed as content is dynamically generated onto the pages:
https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/

Validation assistance on Add Movies:
https://www.w3resource.com/javascript/form/letters-numbers-field.php

Javascript for the character count on find_movie.html from vittore:
https://stackoverflow.com/questions/19962608/javascript-character-count

The Javascript "back a page" command found here:
https://www.w3schools.com/jsref/met_his_back.asp

Dark filter for the carousel images found here:
https://stackoverflow.com/questions/46819577/bootstrap-4-beta-carousel-dark-overlay

Assistance with card-deck media-query functionality (cards would compress to be unreadable before stacking ontop of one another) from FrankieDoodie:
https://stackoverflow.com/questions/36487389/bootstrap-4-card-deck-table-cell-columns-responsive-based-on-viewport/36499275#36499275


### images

VHS tape image - From Anthony on Pexels:
https://www.pexels.com/photo/3-vhs-tape-on-top-of-table-157543/

Assorted cameras image - From Free Creative Stuff on Pexels:
https://www.pexels.com/photo/assorted-camera-lot-on-surface-in-grayscale-photo-1422223/

Single video camera image - From Abet Llacer on Pexels:
https://www.pexels.com/photo/close-up-photography-of-video-camera-927444/

### Movie and User details

Users added utilising a random name generator: 
https://jimpix.co.uk/

The majority of the movies came from the following list:
https://www.scoopwhoop.com/Lesser-Known-Movies-To-Binge-On-This-Long-Weekend/