import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../redux/uiDucks'
import validator from 'validator'
import { registerWhitEmailPassword } from '../redux/loginDucks'

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {msjError} = useSelector(store => store.ui)
    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',

    })

    const {name, email, password, password2} = values

    const handleValidateChange = (e) =>{
        handleInputChange(e)
        // formValidate()
    }
    const formValidate = () => {
        if(name.trim().length===0){
            dispatch(setError('Nombre requerido'))
            return false
        }
        if(!validator.isEmail(email)){
            dispatch(setError('Email requerido'))
            return false
        }
        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          }) && password === password2) {
            dispatch(setError('Ya puede registrarse'))
          return false
        }
        return true
    }

    const handleInputSubmit = (e) => {
        e.preventDefault()
        console.log("xd")
        dispatch(registerWhitEmailPassword(email,password,name))
        reset()
        history.push('/login')
    }
    return (
        <div>
            <h1>Registrar</h1>
            {/* {
                msjError && (
                    <div className="alert alert-danger" role="alert">
                        {msjError}
                    </div>
                )
            } */}
            <Form onSubmit={handleInputSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text" 
                name='name'
                value={name}
                placeholder="Enter your name" 
                onChange={handleValidateChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                // type="email" 
                name='email'
                value={email}
                placeholder="Enter email" 
                onChange={handleValidateChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <span>La contraseña debe contener Mayusculas, minusculas, numeros, simbolos </span>
                <Form.Control 
                type="password" 
                placeholder="Password"
                name='password'
                value={password}
                onChange={handleValidateChange} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Repite la contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                name='password2'
                value={password2}
                onChange={handleValidateChange} 
                />
            </Form.Group>
            <Button  type="submit" >
            Registrarse
            </Button>
            </Form>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Register
