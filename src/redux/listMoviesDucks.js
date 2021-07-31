import { db } from "../firebase-config/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import types from "./types/types";


// constantes

// reducer
const moviesDucks = (state= { movies:[] }, action) => {
    switch (action.type) {
        case types.listMovies:
            return {
                ...state,
                movies: [...action.payload]
            };
        case types.newMovie:
            return {
                ...state, 
                movies: [action.payload, ...state.movies]
            }
        default:
            return state;
    }
}
export default moviesDucks

// subir a firebase 
export const registerDBMovies = (movies) => async (dispatch) =>  {
    try {
        await db.collection('/movies').add(movies)
    } catch (error) {
        throw error
    }
}

export const list = (movies) => ({
    type: types.listMovies,
    payload: movies
})
// actions
export const listMoviesApi = () => async (dispatch) =>{
    const res = await db.collection('/movies').get();
    const movies = []
    res.forEach(element => {
        movies.push(element.data())
    });
    dispatch(list(movies))
}

export const deleteMovie = (id) => async (dispatch) => {
    const document = await db.collection('/movies').where('id', '==', id);
    const response = await document.get()
    response.docs.forEach(movie => {
        movie.ref.delete();
    });
    dispatch(listMoviesApi())
    console.log(response)
}


// Subir a cloudinary con fileUpload, obtener url para subir a firebase
export const movieNew = (movie, file) => {
    return async (dispatch) => {
        let fileUrl=[]
      
        try {
            fileUrl = await fileUpload(file)
        } catch (error) {
            fileUrl = []
            console.log(error)
        }

        const newMovie = {
            id: movie.title + movie.video,
            title: movie.title,
            video: movie.video,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            overview: movie.overview,
            image: fileUrl
        }

        await db.collection(`/movies`).add(newMovie)
        dispatch(addNewMovie(newMovie))
    }
}


export const addNewMovie = (newMovie) => ({
    type: types.newMovie,
    payload: {
    ...newMovie
    }
})




















