import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const ViewFilm = () => {
    const { id } = useParams()
    const { movies } = useSelector(state => state.movies)
    const filterSearch = movies.filter(ele => {return (ele.id === Number(id))})
    console.log(movies.filter(ele => {return (ele.id === Number(id))}))
    // console.log(movies.find(ele => ele.id === id))
    console.log(filterSearch)
    return (
        <div>
            <h2>Trailer</h2>
            {
                filterSearch?.video ?
                    <p>Si hay pelio</p>
                    : <h3>Lo sentimos :C, aún no hay tailer</h3>
            }
        </div>
    )
}

export default ViewFilm
