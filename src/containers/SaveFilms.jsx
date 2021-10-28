import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Detalle from '../components/Detalle'
import { CardFilm } from '../layout/all-films/card-film/CardFilm'
import { ContainerCard } from '../layout/all-films/grid/Grid'
import { movieSave } from '../redux/listMoviesDucks'


const SaveFilms = () => {
    const [element, setElement] = useState(null)
    const dispatch = useDispatch()
    const { filmSaveRender } = useSelector(state => state.movies)
    const handleModal = (ele) => {
        setElement(ele)
    }
    useEffect(() => {
        dispatch(movieSave(JSON.parse(localStorage.getItem('SaveFilm'))))
    }, [dispatch])
    return (
        <>
            <ContainerCard >
                {
                    filmSaveRender?.map((ele, i) => (
                        <CardFilm className='card'
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            key={i}
                            onClick={() => handleModal(ele)}
                            imagen={ele?.image ? ele?.image : `https://image.tmdb.org/t/p/w500/` +
                                ele?.poster_path}>
                            <div className='pegatin' style={ele?.vote_average <= 7.0 ? { border: '2px solid var(--blue)' } : { border: '2px solid var(--primary)' }}>
                                <i className="fas fa-star"
                                    style={{ color: "var(--primary)", fontSize: "20px" }} />
                                <h4
                                >{ele.vote_average}</h4>
                            </div>
                        </CardFilm>
                    ))
                }
            </ContainerCard>
            <Detalle element={element} statusFilmSave={true} />
        </>
    )
}

export default SaveFilms
