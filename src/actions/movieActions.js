import Axios from 'axios';

const apiUrl = 'http://58e24bebd362871200fead77.mockapi.io/movies/';
const infoUrl = 'http://www.omdbapi.com/?t=';


export const fetchMovieInfoSuccess = (movieinfo) => {
  return {
    type: 'FETCH_MOVIE_INFO_SUCCESS',
    movies
  }
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    movies
  }
};

export const createMoviesSuccess = (movies) => {
  return {
    type: 'CREATE_MOVIES_SUCCESS',
    movies
  }
};

export const fetchMovieByIdSuccess = (movies) => {
  return {
    type: 'FETCH_MOVIES_BY_ID_SUCCESS',
    movies
  }
};


//Async Action
export const fetchMovies = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchMoviesSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};





export const createMovie = (movie) => {
  return (dispatch) => {
    return Axios.post(apiUrl, movie)
      .then(response => {
        dispatch(createMoviesSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchMovieById = (movieId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' +movieId)
      .then(response => {

        dispatch(fetchMovieByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
