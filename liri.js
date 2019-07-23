require("dotenv").config();

var fs = require("fs");


var concert = require("./concerts");

var movie = require("./movies");

var songSearch = require("./songsearch");

// Create a new concert object
var newConcert = new concert();
// Create a new movie object
var newMovie = new movie();

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments 
var term = process.argv.slice(3).join(" ");

function liriSearch() {

    if (search === "concert-this") {
        newConcert.findConcert(term);

    }

    else if (search === "movie-this") {
        console.log("search for movie");
        newMovie.findMovie(term);

    }
    else if (search === "spotify-this-song") {
        console.log("search for song");
        songSearch(term);

    }
    else if (search === "do-what-it-says") {
        fs.readFile("random.txt", "utf8", function (error, data) {

            var dataSplit = data.split(",");
            search = dataSplit[0];
            term = dataSplit[1];
            liriSearch(term);
            console.log(search, term);
        });


    }


    else {
        console.log("type a command");
    }


};
liriSearch();







