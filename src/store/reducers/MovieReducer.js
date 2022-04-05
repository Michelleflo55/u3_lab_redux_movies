const { MOVIE_LOADING_TYPE, GET_MOVIES } = require('../types')

const iState = {
  movieList: [],
  moviesLoading: ''
}

const MovieReducer = (state = iState, action) => {
  switch (action.type) {
    case MOVIE_LOADING_TYPE:
      return { ...state, moviesLoading: action.payload }
    case GET_MOVIES:
      return { ...state, movieList: action.payload.results }
    default:
      return { ...state }
  }
}

export default MovieReducer