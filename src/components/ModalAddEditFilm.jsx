import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { movieNew } from '../redux/listMoviesDucks'

const ModalAddEditFilm = () => {
    const dispatch = useDispatch()
    let file = []
    const [values, handleInputChange, reset] = useForm({
        title: '',
        video: '',
        release_date: '',
        vote_average: '',
        overview: ''
    })
    const {title, video, release_date, vote_average, overview} = values
    const handleFileChange = (e) => {
        console.log(e)
        file = e.target.files[0];
    }

    const handleSubmitSave = (e) => {
        e.preventDefault()
        dispatch(movieNew(values, file))
        reset()
    }
console.log(values)
    return (
        <>
        <div className="modal fade " id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-xl ">
            <div className="modal-content">
                <div className="modal-header">
                    <i className="fas fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmitSave}>
                        <input type="text" 
                        placeholder='Titulo de la pelicula'
                        name='title'
                        value={title}
                        onChange={handleInputChange}/>

                        <input type="text" 
                        placeholder='url video'
                        name='video'
                        value={video}
                        onChange={handleInputChange}/>

                        <input type="text" 
                        placeholder='Fecha de estreno'
                        name='release_date'
                        value={release_date}
                        onChange={handleInputChange}/>

                        <input type="text" 
                        placeholder='Calificación'
                        name='vote_average'
                        value={vote_average}
                        onChange={handleInputChange}/>

                        <textarea 
                        name="overview" 
                        value={overview}
                        id="" 
                        cols="30" 
                        rows="3"
                        placeholder='Descripcion de la pelicula'
                        onChange={handleInputChange}
                        ></textarea>

                        <input type="file" 
                        placeholder='Poster'
                        name='file'
                        onChange={handleFileChange}/>

                        <button type='submit'>Guardar</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ModalAddEditFilm
