import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { listSearchStore } from '../redux/listMoviesDucks'
import { logoutEvent } from '../redux/loginDucks'


const ContainerSearch = styled.div`
    .d-none{
        display: none;
    }
`
const InputSearch = () => {
    const [url, setUrl] = useState('')
    const dispatch = useDispatch()
    const location = useLocation()
    const handleSearchChange = ({target}) => {
        dispatch(listSearchStore(target.value, url))
    }
    const submitSearch = (e) => {
        e.preventDefault()
    }
    const handleLogoutClick = () => {
        dispatch(logoutEvent())
    }
    useEffect(() => {
        setUrl(location.pathname)
    }, [url, location.pathname]) 
    return (
        <ContainerSearch className='containerSearch'>
            <div className={`barraBusqueda ${url === '/admin'? 'd-none': '' }`} onSubmit={submitSearch}>
            <input type="text" onChange={handleSearchChange} />
            <button className="buttonSearch">
            <i className="fas fa-search"></i>
            </button>
            </div>
            <i className="fas fa-sign-out-alt i-back" onClick={handleLogoutClick}></i>
        </ContainerSearch>
    )
}

export default InputSearch