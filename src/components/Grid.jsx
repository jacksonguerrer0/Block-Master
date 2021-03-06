import React, {  useEffect, useState } from 'react'
import { CardFilm } from '../layout/all-films/card-film/CardFilm'
import { ContainerCard } from '../layout/all-films/grid/Grid'
import Detalle from './Detalle'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux'


const Grid = () => {
    const { moviesRender } = useSelector(state => state.movies)
    const [refresh, setRefresh] = useState(null)
    const [element, setElement] = useState(null)
    const handleModal = (ele) => {
        setElement(ele)
    }
    const [data, setData] = useState([])

    useEffect(() => {
        setData(moviesRender)
    }, [moviesRender])
    return (
        <InfiniteScroll
            dataLength={data.length}
            next={() => setData([...data, ...moviesRender])}
            hasMore={true}
            loader={<h4>Loading...</h4>}>
            <ContainerCard >
                {
                    data.map((ele, i) => (
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
            <Detalle element={element}  refresh={refresh} setRefresh={setRefresh}/>
        </InfiniteScroll>
    )
}

export default Grid
