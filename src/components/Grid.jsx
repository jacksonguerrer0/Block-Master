import React,{useState} from 'react'
import { CardFilm, Pegatin } from '../layout/all-films/card-film/CardFilm'
import {ContainerCard} from '../layout/all-films/grid/Grid'
import Detalle from './Detalle'
import db from '../db/db'
import InfiniteScroll from 'react-infinite-scroll-component';
const array = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(db)


const Grid = () => {
    const [element, setElement] = useState(null)
    const handleModal = (ele) => {
        setElement(db?.find(el => el.id === ele))
}
    return (
        <ContainerCard >
            
            {
                db.map(ele => (
                    <CardFilm data-bs-toggle="modal" data-bs-target="#exampleModal" key={ele.id} onClick={() => handleModal(ele.id)} imagen={ele.imagen} >
                    <Pegatin style={ele?.raiting <= 50 ? {border: '2px solid var(--blue)'}:{border: '2px solid var(--primary)'} }>
                        <i className="fas fa-star" style={{color: "var(--primary)", fontSize:"20px"}}/>
                        <h4 style={{ marginBottomB:"50px"}}>{ele.raiting}</h4>
                    </Pegatin>
                    </CardFilm>  
                ))
            }
            {
                array.map(ele => (
                    <CardFilm data-bs-toggle="modal" data-bs-target="#exampleModal" key={ele} onClick={() => handleModal(ele)}>
                    <Pegatin>
                        <i className="fas fa-star" style={{color: "var(--primary)", fontSize:"20px"}}/>
                        <h4 style={{ marginBottomB:"50px"}}>{ele.raiting}</h4>
                    </Pegatin>
                    </CardFilm> 
                ))
            }
            <Detalle element={element}/>
        </ContainerCard>
    )
}

export default Grid
