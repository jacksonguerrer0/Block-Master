import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import moviesDucks from './listMoviesDucks';
import loginDucks from './loginDucks';
import uiDucks from './uiDucks'

const rootReducer = combineReducers({
    login: loginDucks,
    ui: uiDucks,
    movies: moviesDucks
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(
    rootReducer,    
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store