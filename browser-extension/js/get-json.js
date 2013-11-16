var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://www.reddit.com/r/science/comments/1qr4ya/.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

console.log(json);