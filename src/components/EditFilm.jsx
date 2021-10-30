import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { useForm } from '../hooks/useForm'
import { EditMovie } from '../redux/listMoviesDucks'
import { ContainerModalAddEditFilm } from './modal-add-edit-film-styled/ModalAddEditFilm'

const EditFilm = ({ editModal }) => {
    const dispatch = useDispatch()
    const [activeFile, setActiveFile] = useState('')
    const [file, setFile] = useState({})
    const [values, handleInputChange, reset] = useForm({
        title: '',
        video: '',
        release_date: '',
        vote_average: '',
        overview: ''
    })
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
        setActiveFile('activeFile')
    }

    const handleSubmitSave = (e) => {
        e.preventDefault()
        Swal.fire({
            title: `Estás seguro de actualizar ${editModal.title} ?`,
            text: "Esta acción no es reversible!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, actualizar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(EditMovie(values, file, editModal)).then((response) => {
                    if (response) {
                        Swal.fire(
                            'Oops!',
                            'Ha ocurrido un error al actualizar.',
                            'error'

                        )
                    } else {
                        reset()
                        Swal.fire(
                            'Actualizado!',
                            'Tu archivo ha sido actualizado.',
                            'success'
                        )
                    }
                })
            }
        })
        reset()
    }
    return (
        <ContainerModalAddEditFilm>
        <div className="modal fade " id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
                <div className="modal-header">
                    <i className="fas fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmitSave}>
                        <input type="text" 
                        defaultValue={editModal.title}
                        name='title'
                        onChange={handleInputChange}/>
                        <input type="text" 
                        defaultValue={editModal.video ? editModal.video: 'Agrega un video'}
                        name='video'
                        onChange={handleInputChange}/>

                        <input type="text" 
                        defaultValue={editModal.release_date}
                        name='release_date'
                        onChange={handleInputChange}/>

                        <input type="text" 
                        name='vote_average'
                        defaultValue={editModal.vote_average}
                        onChange={handleInputChange}/>

                        <textarea 
                        name="overview" 
                        defaultValue={editModal.overview}
                        cols="30" 
                        rows="3"
                        placeholder='Descripcion de la pelicula'
                        onChange={handleInputChange}
                        ></textarea>
                        <p style={{color: 'black'}}>{editModal?.poster_path  ?'Es obligatorio editar la imagen antes de guardar ya que viene por defecto': ''}</p>
                        <div className='upload-btn-wrapper'>
                            <input type="file" 
                            placeholder='Poster'
                            name='file'
                            onChange={handleFileChange}/>
                            <button className='btn-file'>Subir Imagen</button>
                            <i className={`far fa-check-circle ${activeFile}`} ></i>
                        </div>
                        <button type='submit'>Guardar</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        </ContainerModalAddEditFilm>
    )
}

export default EditFilm
