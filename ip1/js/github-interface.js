var Github = require('./../js/github.js').githubModule;


$(document).ready(function() {
    // var newGithub = new Github();
    $('#form').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        console.log(username);
        var insertUsername = new Github();
        insertUsername.getRepos(username)
    });
});
