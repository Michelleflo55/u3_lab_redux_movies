import Client from '.'
const API_KEY = process.env.REACT_APP_REDUX_KEY

export const GetMovies = async () => {
  try {
    const res = await Client.get(
      `/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (id) => {
  try {
    const res = await Client.get(
      `/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}