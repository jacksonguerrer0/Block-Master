import Swal from "sweetalert2";
import { db, storageFire } from "../firebase-config/firebaseConfig";
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

export const deleteMovie = (id, nameImage) => async (dispatch) => {
    await db.collection('/movies').doc(id).delete();
    // const deleteImg = await storageFire.ref(`/imagenesPeliculas`)
    // console.log(id)
    // response.docs.forEach(movie => {
    //     movie.ref.delete();
    // });
    dispatch(listMoviesApi())
    if(nameImage !== undefined){
        await storageFire.ref(`/imagenesPeliculas/${nameImage}`).delete()
    }
    // console.log(image)
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
            image: urlImage,
            nameImage: refFile.name
        }
        let res = await db.collection(`/movies`).add(newMovie)
        if (!(res)) {
            Swal.fire(
                'Oops!',
                'Ha ocurrido un error al agregar.',
                'error'

            )
        } else {
            Swal.fire(
                'Agregado!',
                'Tu archivo ha sido agregado.',
                'success'
            )
        }
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
    return async (dispatch, getState) => {
        const refFile = storageFire.ref(`/imagenesPeliculas/${file.name}`)
        await refFile.put(file)
        let urlImage = ''
        if(file.name !== undefined){
            urlImage = await refFile.getDownloadURL()
        }
        const updateMovie = {
            id: new Date().getTime(),
            title: movie.title.length === 0 ? editModal.title: movie.title,
            video: movie.video.length === 0 ? editModal.video: movie.video,
            release_date: movie.release_date.length === 0 ? editModal.release_date: movie.release_date,
            vote_average: movie.vote_average.length === 0 ? editModal.vote_average: movie.vote_average,
            overview: movie.overview.length === 0 ? editModal.overview: movie.overview,
            image: urlImage.length > 0 ? urlImage : editModal.image || editModal.poster_path ,
            nameImage: urlImage.length > 0 ? refFile.name: 'Sin id de imagen'
        }
        await db.collection('/movies').doc(editModal.id).update(updateMovie)
        dispatch(listMoviesApi())
    }
}


// barra busqueda 

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