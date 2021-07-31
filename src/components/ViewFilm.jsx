import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const ViewFilm = () => {
    const { title } = useParams()
    const {movies} = useSelector(state => state.movies)
    console.log(movies)
    const filterSearch = movies.filter(ele =>
        (ele.title.toLowerCase().includes(title.toLowerCase()))
    )

        console.log(filterSearch[0].video)
    return (
        <div>
            <h2>Trailer</h2>
            {
                filterSearch[0]?.video? 
                <iframe width="560" height="315" src={filterSearch[0]?.video} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                : <h3>Lo sentimos :C, aún no hay tailer</h3>
            }
        </div>
    )
}

export default ViewFilm
