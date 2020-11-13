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
            console.log("1 was pressed");
            var title = $("#movie-title-0").text();
            var year = $("#movie-year-0").text();
            var image = $("#movie-image-0").attr('src');
            var actors = $("#movie-actors-0").text();
            console.log(title);
            console.log(year);
            console.log(image);
            console.log(actors);
            break;
        case "select-button-1":
            console.log("2 was pressed");
            break;
        case "select-button-2":
            //q.play();
            console.log("3 was pressed");
            break;
        case "select-button-3":
            //q.play();
            console.log("4 was pressed");
            break;
        case "select-button-4":
            //q.play();
            console.log("5 was pressed");
            break;
        case "select-button-5":
            //q.play();
            console.log("6 was pressed");
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