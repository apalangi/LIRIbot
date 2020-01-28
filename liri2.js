require("dotenv").config();

var axios = require("axios");

var spotify = require("spotify");

var fs = require("fs");

var keys = require("./keys.js");

//var moment = require("moment");







var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, 
function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(data);
});