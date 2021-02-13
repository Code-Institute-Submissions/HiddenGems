// Add a degree of validation to the agree button, disallowing the button to be continuously clicked and updating the database. This could lead to performance problems otherwise.
$('.agree-button').click(function(ev){
    var id = $(ev.currentTarget).attr('data-id');
    var upvoteId = "rating" + id;
    var upvoteCount = $("." + upvoteId).first().text();
    $.post( "/upvote/" + id, function( data ) {
    $("." + upvoteId).text(parseInt(upvoteCount) + 1);
    $(ev.currentTarget).addClass('upvoted').attr('disabled','disabled');
    });
});