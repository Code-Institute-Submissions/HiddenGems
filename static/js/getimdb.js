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
    var imdbID = []

    
    
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
                <p id="imdbID-${[i]}"class="not-visible card-text"></p>
                <a id="select-button-${[i]}" onclick="return getDetails(this.id)" href="/find_movie" class="btn btn-md btn-success btn-block text-uppercase">This One!</a>
              </div>
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
      imdbID[i] = document.getElementById("imdbID-" + [i]);
      imdbID[i].innerHTML = results.d[i].id;
      
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
            var imdbID = $("#imdbID-0").text();
            break;
        case "select-button-1":
            var title = $("#movie-title-1").text();
            var year = $("#movie-year-1").text();
            var image = $("#movie-image-1").attr('src');
            var actors = $("#movie-actors-1").text();
            var imdbID = $("#imdbID-1").text();
            break;
        case "select-button-2":
            var title = $("#movie-title-2").text();
            var year = $("#movie-year-2").text();
            var image = $("#movie-image-2").attr('src');
            var actors = $("#movie-actors-2").text();
            var imdbID = $("#imdbID-2").text();
            break;
        case "select-button-3":
            var title = $("#movie-title-3").text();
            var year = $("#movie-year-3").text();
            var image = $("#movie-image-3").attr('src');
            var actors = $("#movie-actors-3").text();
            var imdbID = $("#imdbID-3").text();
            break;
        case "select-button-4":
            var title = $("#movie-title-4").text();
            var year = $("#movie-year-4").text();
            var image = $("#movie-image-4").attr('src');
            var actors = $("#movie-actors-4").text();
            var imdbID = $("#imdbID-4").text();
            break;
        case "select-button-5":
            var title = $("#movie-title-5").text();
            var year = $("#movie-year-5").text();
            var image = $("#movie-image-5").attr('src');
            var actors = $("#movie-actors-5").text();
            var imdbID = $("#imdbID-5").text();
            break;
        case "select-button-6":
            var title = $("#movie-title-6").text();
            var year = $("#movie-year-6").text();
            var image = $("#movie-image-6").attr('src');
            var actors = $("#movie-actors-6").text();
            var imdbID = $("#imdbID-6").text();
            break;
        case "select-button-7":
            var title = $("#movie-title-7").text();
            var year = $("#movie-year-7").text();
            var image = $("#movie-image-7").attr('src');
            var actors = $("#movie-actors-7").text();
            var imdbID = $("#imdbID-7").text();
            break;
        case "select-button-8":
            var title = $("#movie-title-8").text();
            var year = $("#movie-year-8").text();
            var image = $("#movie-image-8").attr('src');
            var actors = $("#movie-actors-8").text();
            var imdbID = $("#imdbID-8").text();
            break;
    }
  localStorage.setItem("movietitle", title);
  localStorage.setItem("movieyear", year);
  localStorage.setItem("movieactors", actors);
  localStorage.setItem("movieimage", image);
  localStorage.setItem("imdbID", imdbID);
  return True;
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
  var moviecategory = localStorage.getItem("moviecategory");
  $("#category_name").val(moviecategory);
  var imdbID = localStorage.getItem("imdbID");
  $("#imdbID").val(imdbID);
}


// move to new file.
$('.agree-button').click(function(ev){
    var id = $(ev.currentTarget).attr('data-id');
    var upvoteId = "rating" + id;
    var upvoteCount = $("." + upvoteId).first().text();
    $.post( "/upvote/" + id, function( data ) {
    $("." + upvoteId).text(parseInt(upvoteCount) + 1);
    $(ev.currentTarget).addClass('upvoted').attr('disabled','disabled');
    });
});

$('[data-toggle="collapse"]').click(function() {
  $('.collapse.in').collapse('hide')
});


function editEntry(id){
    var movieId = id;
    var movietitle = $('#' + movieId + '_title').text();
    var movieyear = $('#' + movieId + '_year').text();
    var movieactors = $('#' + movieId + '_actors').text();
    var movieimage = $('#' + movieId + '_image').attr('src');
    var moviecategory = $('#' + movieId + '_category').text();
    var imdbID = $('#' + movieId + 'imdbID').text();

    localStorage.setItem("movietitle", movietitle);
    localStorage.setItem("movieyear", movieyear);
    localStorage.setItem("movieactors", movieactors);
    localStorage.setItem("movieimage", movieimage);
    localStorage.setItem("moviecategory", moviecategory);
    localStorage.SetItem("imdbID", imdbID);

    return True;  
 };



function getValidation() {
  var letters = /^[0-9a-zA-Z ]+$/;
   if(document.getElementById("movietitle").value.match(letters))
     {
      getIMDB();
      return true;
     }
   else
     {
     alert("Please only use numbers and letters.");
     return false;
     }
  
};

function goBack() {
  window.history.back();
}