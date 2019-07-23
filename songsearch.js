function songSearch(term) {
    var keys = require("./keys.js");

    var fs = require("fs");

    var Spotify = require('node-spotify-api');

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: term }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Preview: " + data.tracks.items[0].preview_url);
        console.log("Album: " + data.tracks.items[0].album.name);
       


    });

}

module.exports = songSearch;