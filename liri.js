require("dotenv").config();

var keys = require("./keys.js");

var concert = require("./concerts");

// Create a new TV object
var newConcert = new concert();


// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments 
var term = process.argv.slice(3).join(" ");

if (search === "concert-this"){
    newConcert.findConcert(term);
    
}
else if (search === "spotify-this-song"){
    console.log("search for song");
    
}
else if (search === "movie-this"){
    console.log("search for movie");
    
}
else if (search === "do-what-it-says"){
    console.log("do what it says");
}
else {
    console.log("type command");
}


// var spotify = new Spotify(keys.spotify);


// What Each Command Should Do
// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

// Name of the venue

// Venue location

// Date of the Event (use moment to format this as "MM/DD/YYYY")


    


