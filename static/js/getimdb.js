function getMovieName(){
  var movieblank = document.getElementById("movietitle").value;
  var movieunderscore = movieblank.split(" ").join("_").toLowerCase();
  var moviename = "imdb$" + movieunderscore;
  return moviename
};
// Add special character handling
function getMovieLink(){
  var movieblank = document.getElementById("movietitle").value;
  var movielink = movieblank.split(" ").join("+").toLowerCase();
  return movielink
}


var clickCounter = 0;

function getIMDB(){
  var moviename = getMovieName();
  var movielink = getMovieLink();

  function addScript(src) { var s = document.createElement('script'); s.src = src; document.head.appendChild(s); }
  window[moviename] = function (results) {
    var title = []
    var actors = []
    var year = []
    var image = []

    //add 'DId you mean, here'
    
    for (i=0; i < results.d.length; i++) {
      if (clickCounter < results.d.length) {
     
      $('#insertMovie').append(`<div class="card flex-row flex-wrap" >
              <div class="card-header border-0">
                <img id="movie-image-${[i]}" class="thumbnail-image" alt="Image for ${results.d[i].l}">
              </div>
              <div class="card-block px-2">
                <h4 id="movie-title-${[i]}" class="card-title"></h4>
                <p id="movie-year-${[i]}"class="card-text"></p>
                <p id="movie-actors-${[i]}"class="card-text"></p>
              </div>
              <button id="select-button-${[i]}" onclick="getDetails(this.id)" class="btn-sm btn-primary">This One!</button>
              <a href="/find_movie" class="btn-sm btn-primary">Go!</a>
            </div>`);
            //Add select button which pulls info into dict.
      clickCounter++;
      };
      title[i] = document.getElementById("movie-title-" + [i]);
      title[i].innerHTML="<a href='#'>" + results.d[i].l + "</a>";
      actors[i] = document.getElementById("movie-actors-" + [i]);
      actors[i].innerHTML= results.d[i].s;
      year[i] = document.getElementById("movie-year-" + [i]);
      year[i].innerHTML= results.d[i].y;
      image[i] = document.getElementById("movie-image-" + [i]);
      image[i].setAttribute('src', results.d[i].i);
      
    } 
  };
  addScript('https://sg.media-imdb.com/suggests/' + movielink[0] + '/' + movielink + '.json'); 

  
};
// should call imdb only after html is loaded. Race issue.



// push data into a form and ask to confirm. Then have python pull data. Ask how you would categorise the film?

function getDetails(id){
    switch(id){
        case "select-button-0":
            var title = $("#movie-title-0").text();
            var year = $("#movie-year-0").text();
            var image = $("#movie-image-0").attr('src');
            var actors = $("#movie-actors-0").text();
            break;
        case "select-button-1":
            var title = $("#movie-title-1").text();
            var year = $("#movie-year-1").text();
            var image = $("#movie-image-1").attr('src');
            var actors = $("#movie-actors-1").text();
            break;
        case "select-button-2":
            var title = $("#movie-title-2").text();
            var year = $("#movie-year-2").text();
            var image = $("#movie-image-2").attr('src');
            var actors = $("#movie-actors-2").text();
            break;
        case "select-button-3":
            var title = $("#movie-title-3").text();
            var year = $("#movie-year-3").text();
            var image = $("#movie-image-3").attr('src');
            var actors = $("#movie-actors-3").text();
            break;
        case "select-button-4":
            var title = $("#movie-title-4").text();
            var year = $("#movie-year-4").text();
            var image = $("#movie-image-4").attr('src');
            var actors = $("#movie-actors-4").text();
            break;
        case "select-button-5":
            var title = $("#movie-title-5").text();
            var year = $("#movie-year-5").text();
            var image = $("#movie-image-5").attr('src');
            var actors = $("#movie-actors-5").text();
            break;
        case "select-button-6":
            var title = $("#movie-title-6").text();
            var year = $("#movie-year-6").text();
            var image = $("#movie-image-6").attr('src');
            var actors = $("#movie-actors-6").text();
            break;
        case "select-button-7":
            var title = $("#movie-title-7").text();
            var year = $("#movie-year-7").text();
            var image = $("#movie-image-7").attr('src');
            var actors = $("#movie-actors-7").text();
            break;
        case "select-button-8":
            var title = $("#movie-title-8").text();
            var year = $("#movie-year-8").text();
            var image = $("#movie-image-8").attr('src');
            var actors = $("#movie-actors-8").text();
            break;
    }
  localStorage.setItem("movietitle", title);
  localStorage.setItem("movieyear", year);
  localStorage.setItem("movieactors", actors);
  localStorage.setItem("movieimage", image);
}


function setDetails() {
  var movietitle = localStorage.getItem("movietitle");
  $("#movietitle").val(movietitle);
  var movieyear = localStorage.getItem("movieyear");
  $("#movieyear").val(movieyear);
  var movieactors = localStorage.getItem("movieactors");
  $("#movieactors").val(movieactors);
  var movieimage = localStorage.getItem("movieimage");
  $("#movieimage").val(movieimage);
}

$('.agree-button').click(function(ev){
    var id = $(ev.currentTarget).attr('data-id');
    var upvoteId = "rating" + id;
    var upvoteCount = $("." + upvoteId).first().text();
    $.post( "/upvote/" + id, function( data ) {
    $("." + upvoteId).text(parseInt(upvoteCount) + 1);
      // change your button here, and remove its upvote_button class
    });
});