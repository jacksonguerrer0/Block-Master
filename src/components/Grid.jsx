import React, {  useState } from 'react'
import { CardFilm } from '../layout/all-films/card-film/CardFilm'
import { ContainerCard } from '../layout/all-films/grid/Grid'
import Detalle from './Detalle'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux'


const Grid = () => {
    const { movies } = useSelector(state => state.movies)
    const [element, setElement] = useState(null)
    // const [items, setItems] = useState(movies.length = 10)


    // const fetchMoreData = () => {
    //     setItems(items + 10)
    // };
        console.log(movies)

    const handleModal = (ele) => {
        setElement(ele)
    }
    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={movies.length}
            hasMore={true}
            loader={<h4>Loading...</h4>}>
            <ContainerCard >
                {
                    movies.map((ele, i) => (
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
            <Detalle element={element} />
        </InfiniteScroll>
    )
}

export default Grid
