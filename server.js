var dotenv = require('dotenv');
dotenv.load();


// Packages
var express = require('express');
var app = express();
var instagram = require('instagram-node').instagram();


//var client_id = process.env.CLIENT_ID;
//var client_secret = process.env.CLIENT_SECRET;


//
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

instagram.use({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

app.get('/', function(req, res) {

  instagram.media_popular(function(err, medias, remaining, limit){

    res.render('pages/index', {grams: medias})

  });

})


app.listen(8080, function(err) {
  if(err){
    console.log("Error");
  } else {
    console.log("Listening on port 8080");
  }
});
