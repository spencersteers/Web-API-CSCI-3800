var usergrid = require('usergrid');
var express = require('express');
var bodyParser = require('body-parser')

var client = new usergrid.client({
  orgName: 'spenceersteers',
  appName: 'sandbox',
  logging: true
});


var app = express();
var router = express.Router();

app.use(bodyParser.json());

// /movies with GET would get all movies
// /movies/{id} would POST a movie with a specific id
// /movies with POST would update a collection (you don't need to support) - you can send an error back saying deleting all values is not supported
// /movies/{id} with POST would update the movie with the ID
// /movies/{id} with DELETE would delete the movie with the ID

var movieKeys = ['title', 'year', 'actors'];
function isValidMovie(movie) {
  for (var i = 0; i < movieKeys.length; i++) {
    if (!(movieKeys[i] in movie)) {
      console.log("movie missing key " + movieKeys[i]);
      return false;
    }
  };

  if (!Array.isArray(movie.actors)) {
    console.log("movie.actors is not array");
    return false;
  }

  if (movie.actors.length < 1) {
    console.log("movie.actors is empty");
    return false;
  }

  return true;
}

router.use(function(req, res, next) {
  next();
});

router.route('/movies')
  .get(function(req, res) {
    client.createCollection({type:'movies'}, function (err, movies) {
      if (err) {

      }
      else {
        var allMovies = [];
        while(movies.hasNextEntity()) {
          //get a reference to the dog
          allMovies.push(movies.getNextEntity().get());
        }
        res.status(200).json(allMovies);
        res.end();
      }
    });
  })
  .post(function(req, res) {
    client.createEntity({type:'movies'}, function (err, movie) {
      if (err) {

      }
      else {
        if (isValidMovie(req.body)) {
          movie.set(req.body);
          movie.save(function(err){
            if (err) {

            }
            else {
              res.json(movie.get());
              res.end();
            }
          });
        }
        else {
          res.status(400).json({error: 'invalid movie object'});
          res.end();
        }
      }
    });
  });

router.route('/movies/:id')
  .get(function(req, res) {
    var options = {type: 'movies', uuid: req.params.id};
    client.createEntity(options, function (err, movie) {
      if (err) {
        res.status(404).json({error: 'movie not found'});
        res.end();
      }
      else {
        res.status(200).json(movie.get());
        res.end();
      }
    });
  })
  .delete(function(req, res) {
    var options = {type: 'movies', uuid: req.params.id};
    client.createEntity(options, function (err, movie) {
      if (err) {
        res.status(404).json({error: 'movie not found'});
        res.end();
      }
      else {
        res.status(200).json(movie.get());
        res.end();
        movie.destroy(function(err){
          if (err){

          }
          else {
            movie = null;
          }
        });
      }
    });
  });


app.use('', router);

var port = process.env.PORT || 9000;
console.log('assignment4 is listening on port ' + port);
app.listen(port);
