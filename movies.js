var axios = require("axios");
var fs = require("fs");


var movie = function() {


    this.findMovie = function(term) {
        var URL = "https://www.omdbapi.com/?t=" + term + "&apikey=trilogy";
    
        axios.get(URL).then(function(response) {
          // parse the response body (string) to a JSON object
          var jsonData = response.data;
        //   console.log(jsonData);
          // showData ends up being the string containing the show data we will print to the console
          var movieData = [
            "Title: " + jsonData.Title ,
            "Year: " + jsonData.Year,
            "IMDB Rating: " + jsonData.imdbRating,
            "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value ,
            "Country: " + jsonData.Country,
            "Language: " + jsonData.Language,
            "Plot: " + jsonData.Plot,
            "Actors: " + jsonData.Actors
          ].join("\n\n");
          console.log(movieData);
          
      });
      
  };
};
  module.exports = movie;