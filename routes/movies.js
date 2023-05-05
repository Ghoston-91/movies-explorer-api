const router = require('express').Router();

const { validateMovieData, validateMovieId } = require('../middlewares/validators/movie-validator');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', validateMovieData, createMovie);
router.delete('/movies/:movieId', validateMovieId, deleteMovie);

module.exports = router;
