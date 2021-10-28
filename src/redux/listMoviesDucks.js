import { db, storageFire } from "../firebase-config/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import types from "./types/types";


// constantes

// reducer
const moviesDucks = (state= { movies:[], moviesRender : [] }, action) => {
    switch (action.type) {
        case types.listMovies:
            return {
                ...state,
                movies: [...action.payload],
                moviesRender: [...action.payload]
            };
        case types.newMovie:
            return {
                ...state, 
                movies: [action.payload, ...state.movies],
                moviesRender: [action.payload, ...state.movies],
            }
        case types.searchMovie:
            return {
                ...state,
                movies: [...state.movies],
                moviesRender: action.payload
            }
        case types.listMoviesSave: 
            return {
                ...state,
                filmSave: action.payload,
                filmSaveRender: action.payload
            }
        case types.searchMovieSave: 
            return {
                ...state,
                filmSaveRender: action.payload
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
        movies.push({...element.data(), id: element.id })
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


// Subir a storage multimedia con firebase, obtener url para subir a firebase
export const movieNew = (movie, file) => {
    return async (dispatch) => {
        const refFile = storageFire.ref(`/imagenesPeliculas/${file.name}`)
        await refFile.put(file)
        const urlImage = await refFile.getDownloadURL()
        const newMovie = {
            id: new Date().getTime(),
            title: movie.title,
            video: movie.video,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            overview: movie.overview,
            image: urlImage
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



// editar pelis

export const EditMovie = (movie, file, editModal) => {
    console.log(movie, file, editModal )
    return async (dispatch) => {
        let fileUrl=[]
        try {
            fileUrl = await fileUpload(file)
        } catch (error) {
            fileUrl = []
            console.log(error)
        }

        const updateMovie = {
            id: new Date().getTime(),
            title: movie.title,
            video: movie.video,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            overview: movie.overview,
            image: fileUrl
        }
        const document2 = await db.collection('/movies')
        console.log(document2 )
        // const document = await db.collection('/movies').doc(editModal.id).update(updateMovie)
        
        
        // console.log(document)
}
}


// barra bsuqueda 

export const listSearchStore = (searchText, location) => (dispatch, getState) => {
    const {movies, filmSave} = getState().movies
    if(location === '/guardados'){
        const filter = filmSave.filter(ele => (ele.title.toLowerCase().includes(searchText.toLowerCase())))
        dispatch(searchMovieSave(filter))
    }else{
        const filterSearch = movies.filter(ele => (ele.title.toLowerCase().includes(searchText.toLowerCase())))
        dispatch(searchMovie(filterSearch))
    }
}

export const searchMovie = (filterSearch) => ({
    type: types.searchMovie,
    payload: filterSearch
} )
export const movieSave = (movies) =>({
    type: types.listMoviesSave,
    payload: movies
})
export const searchMovieSave = (filter) => ({
    type: types.searchMovieSave,
    payload: filter
})