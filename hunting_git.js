$(document).ready(
    function() {
        $('button').click(function() {
            $.get('https://api.github.com/users/kennethhagist', displayName);
        });
    function displayName(data) {
        if (data.name) {
            $('body').append("<p>"+data.name+"<p>");
        }
    }
}
);