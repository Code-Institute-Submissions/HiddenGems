// 1) Vanilla JavaScript (JSON-P)
function addScript(src) { var s = document.createElement('script'); s.src = src; document.head.appendChild(s); }
window.imdb$intouchables = function (results) {
  var el = document.getElementById("data");
  el.innerHTML = JSON.stringify(results);
};
addScript('https://sg.media-imdb.com/suggests/i/intouchables.json');
 

