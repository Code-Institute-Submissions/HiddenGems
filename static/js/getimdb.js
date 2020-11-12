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





function getDetails(id){
    switch(id){
        case "select-button-0":
            console.log("1 was pressed");
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
}