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


### Data Specific Design
It may be noticed that users do not get the option to edit the movie images on addition to the site, nor edit them in 'Manage Movies'. This was a conscious design decision for several reasons. Firstly, the ability to upload any image to the site leaves a pretty significant vulnerability to those who would wish to abuse the function.
Secondly, IMDB provides a link to where they host the movie image, which leads to a nonsensical string address. On a user first seeing this, they may wish to delete or change this, not knowing that it will stop the image from pulling through correctly.

As such, this field was made hidden, along with the IMDB reference used to direct users to the specific movie page on the IMDB site. 




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
- Heroku - for deploying and hosting the application.  


## Testing

### Validation service

#### HTML

The HTML Validator picked up several errors, such as:

- A missing heading for a section
- Duplication of an ID 
- Several missing end </div> tags - these were added.

#### CSS


#### JavaScript


#### Wave(WebAIM) validator



#### Internal custom validation




### Page links

#### Hidden Gems logo 

Should navigate back to home page - confirmed.

#### Navigation bar 

Home - Should lead back to homepage - confirmed.

Add Movie - Should lead to add_movie when logged in - confirmed.
Should redirect to login with appropriate flash message - confirmed.

Search - Should lead to search - confirmed.

My Movies - Should lead to manage_movies when logged in - confirmed.
Link should be absent when logged out - confirmed.

Login/Register - Should lead to Login - confirmed.
Should be replaced with logout, when logged out - confirmed.

Navbar should collapse to a 'Menu' with three bar display on smaller devices - confirmed.
On click, should drop the same menu options as above as a submenu, and retract dropdown on second click - confirmed.

#### Footer

Facebook logo - Should lead to Facebook.com (would be the actual facebook of the company if real-world) - confirmed.

Twitter logo - Should lead to Twitter.com (would be the actual twitter of the company if real-world) - confirmed.

Instagram logo - Should lead to Instagram.com (would be the actual instagram of the company if real-world) - confirmed.


#### Homepage Buttons

Several of the homepage buttons are repeated across the homepage for individual movies/sections of movies. Each one has been confirmed to work however they will only be recorded here once, for brevity.

Carousel (images at the top of the page) left and right scroll buttons - should navigate left and right respectively across the three images - confirmed.

More Details button - Should lead to movie_details where the respective movie details are loaded into the card - confirmed.

Upvote button - Should post an upvote to the gems_rating in the database. The controlling javascript should also trigger a '+1' to the gems_rating, then block the button from being clicked again, adding a green colour - confirmed.

See More button - Should drop down a hidden row of movies for their respective category. A second click should hide the row - confirmed.

Movies by Category Accordian - should drop down a row of their respective category movies. Second click should close the row. Clicking on another category name should close any other open rows. Confirmed.


#### Movie_details page buttons

Go to IMDB button - Should take you to the current movie's imdb page, opened in a new window - confirmed.

Go back button - should take you back to the main page, emulating the browser back button - confirmed.

#### Login page buttons

Login button - should take the input from the username and password fields and log in the specified user and take them to 'manage_movies' confirmed.
If details are incorrect, should flash that the details are incorrect - confirmed.

Register link - should take you to the 'register' page - confirmed. 

#### Register page buttons

Register button - should take the entered username, email and password and create a new user on the database, then take you to the homepage - Registration took you to an empty 'manage_movies' page. This could be seen by some as a call to action, to add movies however personally I think it looks bare.
Update - revised the manage_movies page to have a prompt when there are no movies to add movies. Registration now takes you back to the manage_movies page which prompts the user to start to add their recommendations.

Login link - should take you to the 'login' page - confirmed.

#### Manage movies page buttons

Add movies button - only should appear when no movies are present for the logged in user - confirmed. Button should take you to 'add_movies' - confirmed.

Edit Movie button - should take you to the edit_movie page with the correct movie details loaded  - confirmed.

Delete Movie button - should launch a modal for deletion confirmation - confirmed.

Modal buttons - 
  'X' close in the top right corner - should close the modal - confiremd.

  Close button - should close the modal - confirmed.

  Delete button - should remove the movie from the database - confirmed.


#### Edit movies page buttons

Edit listing button - should update the current movie with the revised information from the form directly above the button - confirmed.

#### Add movies page buttons

Search film button - should send a call to the IMDB API with the search query from the 'movie title' box, with the cards below then populating the search results - confirmed.

This One button - should direct to the find_movie page with the correct movie details loading into the correct form boxes. 

#### Find movie page buttons

Category dropdown - should be populated with the list of categories on the category database - confirmed.

Go ahead, add my movie button - should update the movie database with the form details displayed above the button - confirmed. The user should then be directed back to the homepage with an appropriate flash message - confirmed.

#### Search page buttons

Search button - should search the movie database for the movie title input in the form box above, triggering the results loading into the cards below - confirmed.

Reset button - should refresh the page and clear any search results in the cards on the page - confirmed.

More details button - appears on the card in the search results.


### Responsiveness 

Due to the heavy use of the bootstrap cards across the website, the site handles different device sizes well. The cards on the main page stack well, though don't sit completely central in the page, which could be improved.

Small changes to the spacing of the page items would also lend an aesthetic improvement - but generally speaking the responsiveness is satisfactory across the site.

### JavaScript tests

editentry.js:
- When called, the function should take the text from the respective form fields and add them to the user's localstorage.

getimdb.js:
- getMovieName function should take the movie title as a search parameter, and format it to be compatible with the imdb seach conventions.
- getMovieLink should format the search title to be compatible with the imdb url needed for the imdb search.
- getIMDB function returns the imdb results and loads them into a repeated bootstrap card.
- getDetails utilises a switch statement due to the known amount of results from the imdb return. It loads the selected movie details into localstorage for use in the setDetails function.
- setDetails should load the needed cards with the correct movie details.

upvote.js:
- should post an upvote to the database, set the upvote count an additional vote and amend the upvote button to be both disabled and an amended colour.

validation.js:
- getValidation function should ensure that there are no characters that will break the imdb search present in the search term, and alert the user if that is the case.
- goBack should replicate the browser back button.
- textCounter should give a real-time character count for the associated field and ensure the user cannot type more characters than the allowed amount.
- The datatoggle javascript didn't seem big enough to warrant it's own file, but it is useful to ensure that the collapse behaviour of the category accordian is as expected - only one category open at a time.



Check form fills here.



### Browsers

The below browsers have had the website opened, navigated through and confirmed to be functional, alongside going through the above testing points:

- Firefox
- Chrome
- Microsoft Edge


### Testing that Heroku version matches development version.

The Heroku version links very well with Github publishes, deploying a new version on each commit which is wonderful functionality.

It was noted that the cards display slightly differently between the repl.it version and the heroku version. There was an issue where the 'gems-rating' value and name would not stay on the same line, but was solved with some minor additional formatting.



## Known issues

- Currently, the upvote system is subject to users not utilising it correctly - someone with an intent to upvote their own movie multiple times could do so. Restricting the upvote to logged in users, and registering who has upvoted then blocking future upvotes from them would be a way around this. This would also require a revamp of the current JavaScript which increments the vote without page refresh also.

The user at present is disabled from upvoting the movie again without a page reload. This will deter some people, but those who wish to continuously upvote could do so with a refresh. I would expect that logging the user against the movie when voted and adding a check on click would expand this. The value could then be updated using AJAX. 

- On the 'Movie Details' page, a 'go back' function was implemented so that the user does not get stuck in a dead end. If the user has navigated from one of the 'See More' dropdowns, then they return to it in the closed state rather than it's previous open state.

- The amount of data that the site can display is quite limited at present. You have 10 movies per feature and only 10 movies allowed to be viewed on the 'Manage Movies' page also. If the site were to increase in scale, at present the data handling is not able to scale with it. This is mentioned in depth in the 'Future Improvements' section below however successful utilisation of the jinja templating would lead to an improvement here. You would then be able to loop the data displays to match however much data the user required. This would be a much preferred way, however I was unable to get the templating to function as needed.

- Pressing the browser 'back' button after logging out from my_movies page leads to a 'key_error' - where the site tries to get your movies but won't allow it due to not being logged in. Custom error pages would solve this.


## Future improvements
- Improve the search function. Take it from it's basic movie name form now to including actors, year etc. This could be done through a more in-depth index on the database, however the page would need to be revamped to handle the results. The current format fulfils the basic user need.
- The main movies page is quite repetitive code-wise. This could be cleaned up with storing the movie cards as a block variable, for example. Inital tests of this principle found getting the 'movie.*' notation difficult. Finding another method to clean this up would be an excellent improvement going forward.

As an update to this point - a mentor note reinforced that one of the strengths of the Jinja notation is the use of templates, and a further effort should be made to implement this. Further testing was carried out using the 'Set Assignments' function of jinja, and the 'Macro' function of jinja to store the code for the cards and reuse it elsewhere - see https://jinja.palletsprojects.com/en/2.11.x/templates/#assignments.

Once again, the card block could be captured, but on use the 'movie.*' variables were returning as 'undefined'. It very well could be an implementation issue that i'm coming across, but for now I'll keep this listed as a future improvement in the knowledge that the project would be much cleaner with the successful implementation of this templating.

- Similar to the above point, how I have built the movie cards has progressed across the project. My early card creation uses Javascript when loading the information in from IMDB. I then moved onto using python/jinja loops and filters when displaying the data in card format from the database. A mentor note then pointed out that a much better way is to follow the MVC coding method, where the filtering is performed in the controller (in this case app.py) rather than in the view (movie.html).

As such, one of the final things added to this project was the 'Random' category. I still loop through the information in the view however the filtering and capturing of the movies to present uses the 'sample' method of MongoDB - https://docs.mongodb.com/manual/reference/operator/aggregation/sample/

On coming back to the project to implement improvements, rewriting the logic of the cards to reflect this across the board would be a worthwhile investment, giving a cleaner structure and better seperation of concerns.

- One suggested by Can, my mentor also - the site would feel more social if the users were able to also leave reviews on the movies, instead of just being able to agree with upvotes. While the current format does fulfil the user stories in my opinion - I can see the value of having additional ways to interact with the site and leave your mark and opinion. I believe this would be a worthwhile future addition.


## Deployment Procedure



## User story walkthroughs





## Conclusion

Does the journey satisfy the user stories?

On a personal note - I found the flask framework to be quite effective at some aspects of the project, but also quite limiting in others. I'm looking forward to utilising Django, which is meant to be a more powerful framework. 



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