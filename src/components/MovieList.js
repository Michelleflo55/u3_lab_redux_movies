import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: () => dispatch(LoadMovies())
  }
}

const MovieList = (props) => {
  useEffect(() => {
    props.fetchMovieList()
  }, [])

  const movies = props.movieState.movieList.map((movie) => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
    </li>
  ))

  return <div>{movies}</div>
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)