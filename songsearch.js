var keys = require("./keys.js");

var fs = require("fs");

var term;

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

spotify.search({ type: 'track', query: term }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});


module.exports = Spotify;