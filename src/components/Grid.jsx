import React,{useState} from 'react'
import { CardFilm, Pegatin } from '../layout/all-films/card-film/CardFilm'
import {ContainerCard} from '../layout/all-films/grid/Grid'
import Detalle from './Detalle'
import db from '../db/db'
import InfiniteScroll from 'react-infinite-scroll-component';


const Grid = () => {
    const [element, setElement] = useState(null)
    const [card, setCard] = useState(Array.from({length: 10}))

    // console.log(Array.from({length: 3}))
    const handleModal = (ele) => {
        setElement(db?.find(el => el.id === ele))
    }
    const fetchMoreData = () => {
        setTimeout(() => {
          setCard(card.concat(Array.from({ length: 10 })));
        }, 1500);
      };

    return (
        <InfiniteScroll  dataLength={card.length} next={fetchMoreData} hasMore={true} loader={<h4>Loading...</h4>}>
            <ContainerCard >
            {
                db.map((ele) => (
                    <CardFilm data-bs-toggle="modal" data-bs-target="#exampleModal" key={ele.id} onClick={() => handleModal(ele.id)} imagen={ele.imagen} >
                    <Pegatin style={ele?.raiting <= 50 ? {border: '2px solid var(--blue)'}:{border: '2px solid var(--primary)'} }>
                        <i className="fas fa-star" style={{color: "var(--primary)", fontSize:"20px"}}/>
                        <h4 style={{ marginBottomB:"50px"}}>{ele.raiting}</h4>
                    </Pegatin>
                    </CardFilm>  
                ))
            }
            {
                card.map((ele, i) => (
                    <CardFilm data-bs-toggle="modal" data-bs-target="#exampleModal" key={i} onClick={() => handleModal(ele)} style={{background: 'var(--primary)'}}>
                    <Pegatin>
                        <i className="fas fa-star" style={{color: "var(--primary)", fontSize:"20px"}}/>
                        <h4 style={{ marginBottomB:"50px"}}>{}</h4>
                    </Pegatin>
                    </CardFilm> 
                ))
            } 
            </ContainerCard>
            <Detalle element={element}/>
        </InfiniteScroll>
    )
}

export default Grid
