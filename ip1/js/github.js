var apiKey = require('./../.env').apiKey;

function Github() {

};

Github.prototype.getRepos = function(username) {

    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
        // console.log(response);

        for (var i = 0; i < response.length; i++) {

            console.log(response[i].name);

            $("#repository-list").append("<li>" + response[i].name + "</li>");
        }
    }).fail(function(error) {
        console.log(error.responseJSON.message);
    });
};
exports.githubModule = Github;
