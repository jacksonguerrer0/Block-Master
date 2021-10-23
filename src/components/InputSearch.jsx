import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { listSearchStore } from '../redux/listMoviesDucks'
import { logoutEvent } from '../redux/loginDucks'
const InputSearch = () => {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const handleSearchChange = ({target}) => {
        setSearch(target.value)
    }
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(listSearchStore(search))
    }
    const handleLogoutClick = () => {
        dispatch(logoutEvent())
  } 
    return (
        <div className="containerSearch">
            <div className=" barraBusqueda" onSubmit={submitSearch}>
            <input type="text" />
            <button className="buttonSearch">
            <i className="fas fa-search"></i>
            </button>
            </div>
            <i className="fas fa-sign-out-alt i-back" onClick={handleLogoutClick}></i>
        </div>
    )
}

export default InputSearch