// 1) Vanilla JavaScript (JSON-P)
function addScript(src) { var s = document.createElement('script'); s.src = src; document.head.appendChild(s); }
window.imdb$intouchables = function (results) {
  var el = document.getElementById("data");
  var el2 = document.getElementById("title1")
  //el.innerHTML = JSON.stringify(results);
  el2.innerHTML= results.d[0].l + ", " + results.d[1].l + ", " + results.d[2].l
    + ", " + results.d[3].l;
  
};
addScript('https://sg.media-imdb.com/suggests/i/intouchables.json');
 

