require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

//var moment = require("moment");

var fs = require("fs");

var userInput = process.argv[2];
var userQuery = process.argv[3];

//var spotify = new Spotify(keys.spotify);

userCommand(userInput);

function userCommand(userInput){
    switch (userInput){
        case "movie-this":
            movieThis();
            break;
        default: 
            break;
    }
};

function movieThis() {
    axios.get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy").then(
  function(response) {

    var body = response.data;
    
    var movieResults = "\nMovie Title: " + JSON.parse(body)["Title"] +
                "\n" +
                "\nYear Came Out: " + JSON.parse(body)["Year"] +
                "\nIMBDB rating: " + JSON.parse(body)["imdbRating"] +
                "\nCountry of Production: " + JSON.parse(body)["Country"] +
                "\nLanguage: " + JSON.parse(body)["Language"] + "\n" +
                "\nPlot: " + JSON.parse(body)["Plot"] +
                "\n"+
                "\nActors: " + JSON.parse(body)["Actors"] + "\n" +
                "\nRotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"] +
                "\nRotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"] +
                "\n==========================================";
            console.log(movieResults);
  }
);
}


