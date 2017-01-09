(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "54820e7ff8ec9d7d8365eea2644524bb45eb338c";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/github.js":2}]},{},[3]);
