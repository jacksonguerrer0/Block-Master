import React, { useEffect, useState } from 'react'
// import '../layout/all-films/detalle/detalle.css'
import { Span } from '../styles/tagsText'
import { CardFilm, Pegatin } from '../layout/all-films/card-film/CardFilm'
import { Link } from 'react-router-dom'
import { ContainerModal } from '../layout/all-films/detalle/Detalle'
import { movieSave } from '../redux/listMoviesDucks'
import { useDispatch } from 'react-redux'
const Detalle = ({element}) => {
    const [saveFilm, setSaveFilm] = useState([]);
    const [removeFavorite, setRemoveFavorite] = useState()
    const dispatch = useDispatch()
    const handleFilmLocalstorage = () => {
        if(saveFilm instanceof Array){
            // Se almacena
            let newArr = [...saveFilm, element];
            let obj = {}
            let arr = []
            // Al obj se le agrega valores con el id de cada elemento del newArr que contenga su respectivo elemento del newArr let obj = {id: elementNewArr}
            for (const i in newArr) {
                obj[newArr[i]['id']]  = newArr[i]
            }
            // Al arr se le pushea cada valor del objeto dando un array común sin el indice de del objeto. let arr = [{....},{...}]
            for (let i in obj) {
                arr.push(obj[i]);
            }
            localStorage.setItem('SaveFilm', JSON.stringify(arr))
            dispatch(movieSave(arr))
            
        }else{
            localStorage.setItem('SaveFilm', JSON.stringify([element]))
            dispatch(movieSave([element]))
        }
        setRemoveFavorite(true)
    }
    const handleRemoveSaveFilm = () => {
        let deleteFilm = saveFilm.filter(ele => ele.id !== element.id)
        localStorage.setItem('SaveFilm', JSON.stringify(deleteFilm))
        dispatch(movieSave(deleteFilm))
        setRemoveFavorite(false)
    }
    const getSaveFilm  = () => {
        setSaveFilm(JSON.parse(localStorage.getItem('SaveFilm')))
    }
    useEffect(() => {
        getSaveFilm()
    }, [])
    useEffect(() => {
        const validateFindLocalStorage = () => {
            let filmsSave = JSON.parse(localStorage.getItem('SaveFilm'))
            let filter = filmsSave.filter(ele => ele.id === element?.id)
            if(filter.length === 1){
                console.log('está en local')
                setRemoveFavorite(true)
            }
            else{
                console.log('no esta en local')
                setRemoveFavorite(false)
            }
            console.log('ok')
        }
        validateFindLocalStorage()
    }, [ element, removeFavorite, saveFilm])
    return (
        <ContainerModal>
        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-xl ">
            <div className="modal-content">
                <div className="modal-header">
                    <i className="fas fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div className="modal-body container-fluid">
                    <div className='containerImg'>
                    <CardFilm 
                    className='imgDetalle' 
                    imagen = { element?.image ? element?.image : `https://image.tmdb.org/t/p/w500`+ element?.poster_path}
                    >
                        <Pegatin 
                        style={element?.vote_average <= 7.0 ? {border: '2px solid var(--blue)'}:{border: '2px solid var(--primary)'} }>

                            <i className="fas fa-star" style={{color: "var(--primary)", fontSize:"20px"}}/>
                            <h4>{element?.vote_average}</h4>
                        </Pegatin> 
                    </CardFilm>
                    </div>
                    <div className='textDetalle'>
                        <h2>{element?.title}</h2>
                        <p>{element?.overview}</p>
                        <Span>{element?.release_date}</Span>
                            <div className="containerButtonDe">
                            <Link to={`/view/${element?.id}`}>
                            <button type="button" className="primary buttonCarrusel ButtonDetalle" data-bs-dismiss="modal" >
                                <i className="fas fa-play"></i>VER AHORA</button>
                            </Link>
                        {
                            !(removeFavorite)
                            ?
                            <button type="button" className="secondary buttonCarrusel ButtonDetalle" onClick={handleFilmLocalstorage}><i className="fas fa-plus"></i>VER MÁS TARDE</button>
                            :
                            <button type="button" className="secondary buttonCarrusel ButtonDetalle" onClick={handleRemoveSaveFilm}><i className="fas fa-minus"></i>ELIMINAR DE FAVORITOS</button>
                        }
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </ContainerModal>
    )
}

export default React.memo(Detalle)
