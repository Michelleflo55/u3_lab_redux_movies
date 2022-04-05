import { GetMovieDetails, GetMovies } from '../../services/MovieService'
import { GET_MOVIE_DETAILS, GET_MOVIES } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movieList = await GetMovies()
      dispatch({
        type: GET_MOVIES,
        payload: movieList
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetails = (id) => {
  
  return async (dispatch) => {
    try {
      const details = await GetMovieDetails(id)
        
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: details
      })
    } catch (error) {
      throw error
    }
  }
}