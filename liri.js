require("dotenv").config();

var keys = require("./keys.js");

var concert = require("./concerts");

var movie = require("./movies");

// var Spotify = require("./songsearch");

// Create a new TV object
var newConcert = new concert();

var newMovie = new movie();
// var spotify = new Spotify(keys.spotify);


// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments 
var term = process.argv.slice(3).join(" ");

if (search === "concert-this"){
    newConcert.findConcert(term);
    
}

else if (search === "movie-this"){
    console.log("search for movie");
    newMovie.findMovie(term);
    
}
else if (search === "spotify-this-song"){
    console.log("search for song");
    // spotify.search("track", term);

}
else if (search === "do-what-it-says"){
    console.log("do what it says");
}
else {
    console.log("type command");
}


 





    


