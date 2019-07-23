var axios = require("axios");

var moment = require("moment");

var concert = function() {


    this.findConcert = function(term) {
        var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
    
        axios.get(URL).then(function(response) {
          // parse the response body (string) to a JSON object
          var jsonData = response.data[0];
          //console.log(jsonData);
          // showData ends up being the string containing the show data we will print to the console
          var concertData = [
            "Next concert for " + term + " ",
            "Venue: " + jsonData.venue.name,
            "Location: " + jsonData.venue.city,
            "Date: " + moment(jsonData.datetime).format('MMMM Do YYYY')
          ].join("\n\n");
          console.log(concertData);
          
      });
      
  };
};
  module.exports = concert;