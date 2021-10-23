import React from 'react'
import { loginGoogle, loginWhitEmailPassword, registerWhitEmailPassword } from '../redux/loginDucks'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { ContainerForm, FormLogin, FormRegister, Input, Button } from './login-styled/LoginStyled'
import { useFormik } from 'formik'
import * as yup from 'yup'


const Login = () => {
    const [isRegister, setIsRegister] = useState(false)
    const dispatch = useDispatch()

    const formikRegister = useFormik({
        initialValues: {
            nameR: '',
            emailR: '',
            passwordR: ''
        },
        validationSchema: yup.object({
            nameR: yup.string().min(5, 'Tu nombre es muy corto').required('Campo requerido'),
            emailR: yup.string().email('Tu email no es valido').required('Campo requerido'),
            passwordR: yup.string().min(6, 'Debe tener mas de 6 caracteres').required('Campo requerido'),
        }),
        onSubmit: (data) => {
            dispatch(registerWhitEmailPassword(data.emailR, data.passwordR, data.nameR))
        }
    })

    const formikSign = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email('Tú email no es valido').required('Este campo es requerido'),
            password: yup.string().required('Este campo es requerido')
        }),
        onSubmit: (data) => {
            dispatch(loginWhitEmailPassword(data.email, data.password))
        }
        
    })
    const handleGoogleLoginClick = () => {
        dispatch(loginGoogle())
    }
    console.log(formikSign.onSubmit)
    return (
        <ContainerForm>
        <div className='containerForm'>
            {
            isRegister? 
            <>
            <h1>Registrar</h1>
            <FormRegister onSubmit={formikRegister.handleSubmit}>
                <label>
                    {
                        formikRegister.errors.nameR ? formikRegister.errors.nameR : 'Nombre'
                    }
                </label>
                <Input
                type="text" 
                name='nameR'
                placeholder="Enter your name" 
                onChange={formikRegister.handleChange}
                value={formikRegister.values.nameR}
                />
                <label>
                    {
                        formikRegister.errors.emailR ? formikRegister.errors.emailR : 'Correo'
                    }
                </label>
                <Input
                type="text" 
                name='emailR'
                placeholder="Enter email" 
                onChange={formikRegister.handleChange}
                value={formikRegister.values.emailR}
                />
                <label>
                    {
                        formikRegister.errors.passwordR ? formikRegister.errors.passwordR : 'Contraseña'
                    }
                </label>
                <Input
                type="password" 
                placeholder="Password"
                name='passwordR'
                onChange={formikRegister.handleChange}
                value={formikRegister.values.passwordR}
                />
                <Button  type="submit" >
                Registrarse
                </Button>
            </FormRegister>
            <p onClick={() => {setIsRegister(false)}}>Inicia sesion</p>
            </>
            :
            <>
            <h2>Iniciar Sesion</h2> 
                <FormLogin onSubmit={formikSign.handleSubmit}>
                <label>
                    {
                        formikSign.errors.email ? formikSign.errors.email : 'Correo'
                    }
                </label>
                <Input 
                type="text" 
                name='email'
                placeholder="Enter email" 
                onChange={formikSign.handleChange}
                />
    
                <label>
                    {
                        formikSign.errors.password ? formikSign.errors.password : 'Contraseña'
                    }
                </label>
                <Input
                type="password" 
                placeholder="Password"
                name='password' 
                onChange={formikSign.handleChange}
                />
                <Button type="submit">
                Enviar
                </Button>

            </FormLogin>
            <p onClick={() => {setIsRegister(true)}}> 
                ¿No tienes cuenta?
            </p>
            </>
            }
            <div >
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" onClick={handleGoogleLoginClick}/>
            </div>
        </div>
        </ContainerForm>
    )
}

export default Login
