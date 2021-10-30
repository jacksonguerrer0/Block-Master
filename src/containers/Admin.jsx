import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { ContainerAdmin, ImgAdmin } from '../components/admin-styled/AdminStyled'
import EditFilm from '../components/EditFilm'
import TableAdmin from '../components/TableAdmin'
import { deleteMovie } from '../redux/listMoviesDucks'


const Admin = () => {
    const dispatch = useDispatch()
    const  [editModal, setEditModal] = useState({})
    const { name } = useSelector(state => state.login)
    const { movies } = useSelector(state => state.movies)

    const handleDelete = (movie) => {
        Swal.fire({
            title: `Estás seguro de eliminar ${movie.title} ?`,
            text: "Esta acción no es reversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí Eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteMovie(movie.id, movie.nameImage)).then((response) => {
                    if (response) {
                        Swal.fire(
                            'Oops!',
                            'Ha ocurrido un error al eliminar.',
                            'error'

                        )
                    } else {
                        Swal.fire(
                            'Eliminado!',
                            'Tu archivo ha sido eliminado.',
                            'success'
                        )
                    }
                })
            }
        })
    }
    const handleEditModal = (row) => {
        setEditModal(row)
    }
    const columns = [
        {
            dataField: 'title',
            text: 'Nombre',
            sort: true
        },
        {
            dataField: 'release_date',
            text: 'Fecha de lanzamiento'
        },
        {
            dataField: 'poster_path',
            text: 'Póster',
            isDummyField: true,
            formatter: (cellContent, row) => {
                return (
                    <ImgAdmin src={row.image ? row.image : `https://image.tmdb.org/t/p/w500${row.poster_path}`} alt="Imagen" />
                );
            }
        },
        {
            dataField: 'edit',
            text: 'Acciones',
            isDummyField: true,
            formatter: (cellContent, row) => {
                return (
                    <>
                        <button className="btn btn-primary me-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalEdit" onClick={() => handleEditModal(row)}>Editar</button>

                        <button className="btn btn-danger m2-2" onClick={() => { handleDelete(row) }}>Eliminar</button>
                    </>
                );
            }
        }
    ]

    return (
        <>
            <ContainerAdmin>
                <p><i className="fas fa-user-circle"></i></p>
                <h3>{name}</h3>
                <TableAdmin columns={columns} data={movies} />
            </ContainerAdmin>
            <EditFilm editModal={editModal}/>
        </>
    )
}


export default Admin
