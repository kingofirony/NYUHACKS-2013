/*========================
var json

Stores the JSON object
containing all comments
on a reddit article



var comments

Array of strings. At the moment,
the strings are only the top-
level comments.
TODO: Fix the function to
get ALL comments.
========================*/

function getComments (url,callback) {
    $.ajax({
        'async': false,
        'global': false,
	    'url': url,
        'dataType': "json",
        'success': function (data) {
	    callback(data);
	}
	});

};

function constructCommentArray(data){
var comments = [];

for (j = 0; j < data[1].data.children.length; j++){
    comments.push(data[1].data.children[j].data.body);
}

return comments;
 
}