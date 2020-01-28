require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var Spotify = require("node-spotify-api");

var fs = require("fs");

var moment = require("moment");

var spotify = new Spotify(keys.spotify);

var getArtist = function(artist) {
  return artist.name;
};

var getSong = function(songName) {
  if (songName === undefined) {
    songName = "D.J. D.J."
  }

  spotify.search(
    {
      type: "track",
      query: songName
    },

  function(err, data) {
    if (err) {
      console.log("Error occurred: " + err);
      return;
    }

    var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtist));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};



//var userInput = process.argv[2];
//var userQuery = process.argv[3];



//userCommand(userInput);

//function userCommand(userInput){
   // switch (userInput){
        //case "movie-this":
           // movieThis();
            //break;
       // default: 
      //      break;
    //}
//};
var movieName = "";

function movieThis() {
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")

    .then(function(response) {


    if (!error && response.statusCode == 200) {
      console.log("\n===========================================" +
          "\nSearch Results:" +
          "\n-------------------------------------------");

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
          "\n==========================================\n";
      console.log(movieResults);
      fs.appendFile("./log.txt", "\n" + movieResults);

      
 //   var jsonData = response.data;
 //   var showData = [
   //   Title = jsonData.title,
     //  Released = jsonData.released,
       //IMDB = jsonData.IMDBrating,
     //  Rotten = jsonData.rottenTomatoesValue,
      // Country  = jsonData.country,
      // Plot = jsonData.plot,
       //Actors =jsonData.actors
    

    //console.log(showData);
  };
});
};

var mrNobody = "http://www.imdb.com/title/tt0485947/";
var mrNobodyMessage = "\n==========================================" +
    "\nIf you haven't watched 'Mr. Nobody', then you should: " +
    "\n" + mrNobody +
    "\nIt's on Netflix!" +
    "\n==========================================";
    

//var runThis = function(argOne, argTwo) {
 // pick (argOne, argTwo);
//};

var getBand = function(artist) {
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=";

  axios.get(queryURL).then(
    function(response) {
      var jsonData = response.data;

      if (!jsonData.length) {
        console.log("No results found for " + artist);
        return;
      }

      console.log("Upcoming concerts for " + artist + ":");

      for (var i = 0; i < jsonData.length; i++) {
        var show = jsonData[i];

        
        console.log(
          show.venue.city +
            "," +
            (show.venue.region || show.venue.country) +
            " at " +
            show.venue.name +
            " " +
            moment(show.datetime).format("MM/DD/YYYY")
        );
      }
    }
  );
};

