import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducer'
import MovieDetailReducer from './reducers/MovieDetailReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    detailsState: MovieDetailReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store