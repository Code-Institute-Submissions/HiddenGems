// responsible for transferring the movie details via localstorage when editing an exisiting movie.

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