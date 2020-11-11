function getMovieName(){
  var movieblank = document.getElementById("movietitle").value;
  var movieunderscore = movieblank.split(" ").join("_");
  //var moviename = 'imdb$intouchables';
  var moviename = "imdb$" + movieunderscore;
  //var movielink = movieblank;

  return moviename
};

function getMovieLink(){
  var movieblank = document.getElementById("movietitle").value;
  var movielink = movieblank.split(" ").join("+");
  return movielink
}


function getIMDB(){
  var moviename = getMovieName();
  //var moviename = 'imdb$incredibles';
  //var movielink = 'intouchables';
  var movielink = getMovieLink();

  function addScript(src) { var s = document.createElement('script'); s.src = src; document.head.appendChild(s); }
  window[moviename] = function (results) {
    var el = []
    var title = []
    var actors = []
    var year = []
    var image = []
    for (i=0; i <5; i++) {
      el[i] = document.getElementById("title" + [i])
      title[i] = document.getElementById("movie-title-" + [i])
      actors[i] = document.getElementById("movie-actors-" + [i])
      year[i] = document.getElementById("movie-year-" + [i])
      image[i] = document.getElementById("movie-image-" + [i])
    }
    //var el = document.getElementById("data");
    //var el2 = document.getElementById("title1")
    //var title1 = document.getElementById("movie-title-1")
    //var year1 = document.getElementById("movie-year-1")
    //var image1 = document.getElementById("movie-image-1")
    //var actors1 = document.getElementById("movie-actors-1")
    //var title2 = document.getElementById("movie-title-2")
    //var year2 = document.getElementById("movie-year-2")
    //var actors2 = document.getElementById("movie-actors-2")
    //var image2 = document.getElementById("movie-image-2")

    //el.innerHTML = JSON.stringify(results);
    //el2.innerHTML= results.d[0].l + ", " + results.d[1].l + ", " + results.d[2].l;

      for (j=0; j <5; j++) {
      title[j].innerHTML= results.d[j].l;
      year[j].innerHTML= results.d[j].y;
      actors[j].innerHTML= results.d[j].s;
      image[j].setAttribute('src', results.d[j].i);
    }

    // title[0].innerHTML= results.d[0].l;
    // year[0].innerHTML = results.d[0].y;
    // actors[0].innerHTML = results.d[0].s;
    // image[0].setAttribute('src', results.d[0].i);
    // title[1].innerHTML= results.d[1].l;
    // year[1].innerHTML = results.d[1].y;
    // actors[1].innerHTML = results.d[1].s;
    // image[1].setAttribute('src', results.d[1].i);
    // title[2].innerHTML= results.d[2].l;
    // year[2].innerHTML = results.d[2].y;
    // actors[2].innerHTML = results.d[2].s;
    // image[2].setAttribute('src', results.d[2].i);
    // title[3].innerHTML= results.d[3].l;
    // year[3].innerHTML = results.d[3].y;
    // actors[3].innerHTML = results.d[3].s;
    // image[3].setAttribute('src', results.d[3].i);
    // title[4].innerHTML= results.d[4].l;
    // year[4].innerHTML = results.d[4].y;
    // actors[4].innerHTML = results.d[4].s;
    // image[4].setAttribute('src', results.d[4].i);
    
    
  };
  addScript('https://sg.media-imdb.com/suggests/' + movielink[0] + '/' + movielink + '.json');
};
// Add switch statement to cover top 5.
