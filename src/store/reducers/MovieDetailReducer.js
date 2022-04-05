const { GET_MOVIE_DETAILS } = require('../types')

const iState = {
  details: {}
}

const MovieDetailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      console.log(action.payload)
        return { ...state, details: action.payload}
    default:
      return {...state}
      
  }
}

export default MovieDetailReducer