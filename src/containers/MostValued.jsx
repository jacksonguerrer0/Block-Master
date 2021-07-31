import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Detalle from '../components/Detalle'
import { CardFilm, Pegatin } from '../layout/all-films/card-film/CardFilm'
import { ContainerCard } from '../layout/all-films/grid/Grid'


const MostValued = () => {
    const {movies} = useSelector(state => state.movies)
    const [element, setElement] = useState(null)

    const moviesValue = movies.concat().sort((a,b)=>b.vote_average-a.vote_average)
    const handleModal = (ele) => {
        setElement(ele)
    }
    return (
        <div>
            <ContainerCard>
            {
                moviesValue.map((ele, i) => (
                    <CardFilm
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" 
                    onClick={() => handleModal(ele)} 
                    key={i}  
                    imagen={ ele?.image ? ele?.image : `https://image.tmdb.org/t/p/w500/`+ 
                    ele?.poster_path}>
                    <Pegatin style={ele?.vote_average <= 7.0 ? {border: '2px solid var(--blue)'}:{border: '2px solid var(--primary)'}}>
                        <i className="fas fa-star" 
                        style={{color: "var(--primary)", fontSize:"20px"}}/>
                        <h4 
                         >{ele?.vote_average}</h4>
                    </Pegatin>
                    </CardFilm> 
                ))
            } 
            <Detalle element={element}/>
            </ContainerCard>
        </div>
    )
}

export default MostValued
