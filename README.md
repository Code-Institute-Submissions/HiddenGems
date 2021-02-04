# HiddenGems
Find and rate lesser-known movies.


## Site Owner Goal
The site owner is looking to bring together a group of like-minded movie lovers. The objective is to have the users make entries to the site, comprising of movie recommendations for good, lesser-known movies.

The site owner is then able to build their own database of great movies, with a user base for possible future ventures also.

A side benefit will be the addition of a voting system so that users can agree or disagree with other peoples contribution. Using this, the site owner will generate a list of 'top voted' movies to fine-tune future movie choices.

The site-owner will want for users to create accounts, both for data capture and in order to keep the voting fair. A user will only be able to vote on a particular film once. 

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


## Design Decisions

### General Design



### Wireframes

Desktop





Mobile




### Technologies used

- Repl.it - this was the chosen development platform.
- Bootstrap for site layout, container code, navbar functions - used throughout for rich content and responsive behaviour.
- JQuery addon used for rich function searching in order to appropriately target html and CSS for site functionality.
- GitHub - utilised for cloud backups and project progression.
- Realfavicongenerator.net - used to correctly generate site favicon


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

### images

VHS tape image - From Anthony on Pexels:
https://www.pexels.com/photo/3-vhs-tape-on-top-of-table-157543/

Assorted cameras image - From Free Creative Stuff on Pexels:
https://www.pexels.com/photo/assorted-camera-lot-on-surface-in-grayscale-photo-1422223/

Single video camera image - From Abet Llacer on Pexels:
https://www.pexels.com/photo/close-up-photography-of-video-camera-927444/
