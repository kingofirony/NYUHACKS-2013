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

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://www.reddit.com/r/gaming/comments/1qr9u7/what_terrifying_controls_meant_13_years_ago/.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

var comments = [];

for (j = 0; j < json[1].data.children.length; j++){
    comments.push(json[1].data.children[j].data.body);
}