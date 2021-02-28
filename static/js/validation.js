
// Validation function for searching a movie. IMDB doesn't recognise anything other than letters, numbers and spaces. This doesn't allow the user to submit anything otherwise.
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
  
}

// Very basic function to allow the user to bring themselves back from the 'More Details' page, which other than the navigation bar is a dead end as the imdb link is target _blank.
function goBack() {
  window.history.go(-1);
}

// Attribution to this function is given to vittore on Stackoverflow. Simple way to count characters on the review field when adding a movie. Stop the user from submitting anything other than a short review. 
function textCounter(field,cnt, maxlimit) {         
	var cntfield = document.getElementById(cnt);
     if (field.value.length > maxlimit) // if too long...trim it!
		field.value = field.value.substring(0, maxlimit);
		// otherwise, update 'characters left' counter
		else
		cntfield.value = maxlimit - field.value.length;
}

// Doesn't seem enough to warrant it's own file - responsible for ensuring the collapse menu displays correctly.
$('[data-toggle="collapse"]').click(function() {
  $('.collapse.in').collapse('hide');
});

