import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { listSearchStore } from '../redux/listMoviesDucks'
import { Form } from 'react-bootstrap'

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
    return (
        <Form className="d-flex barraBusqueda" onSubmit={submitSearch}>
        <Form.Control
          type="search"
          placeholder="Buscar"
          className="mr-2 inputBusqueda shadow-none"
          aria-label="Search"
          onChange={handleSearchChange}
        />
        <button className="buttonSearch">
        <i className="fas fa-search"></i>
        </button>
      </Form>
    )
}

export default InputSearch