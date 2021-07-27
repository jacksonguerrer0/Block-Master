import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import { loginGoogle, loginWhitEmailPassword } from '../redux/loginDucks'
import {useDispatch} from 'react-redux'
const Login = () => {
    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        email: "",
        password: ""
    })
    const {email, password} = values

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        dispatch(loginWhitEmailPassword(email, password))
        reset()
    }
    const handleGoogleLoginClick = () => {
        dispatch(loginGoogle())
    }
    return (
        <div>
           <h2>Iniciar Sesion</h2> 
           <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control 
            type="email" 
            name='email'
            value={email}
            placeholder="Enter email" 
            onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password"
            name='password' 
            value={password}
            onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
            Enviar
            </Button>
            <div >
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" onClick={handleGoogleLoginClick}/>
            </div>
        </Form>
        <Link to='/register'>
          ¿No tienes cuenta?
        </Link>
        </div>
    )
}

export default Login
