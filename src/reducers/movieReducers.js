export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
          return action.movies;
    case 'FETCH_MOVIE_INFO_SUCCESS':
          return action.movieinfo;
    default:
          return state;
  }
};
