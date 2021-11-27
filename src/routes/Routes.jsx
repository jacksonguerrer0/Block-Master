import React, { useEffect, useState } from 'react'
import {  BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import AllFilms from '../containers/AllFilms'
import MostValued from '../containers/MostValued'
import SaveFilms from '../containers/SaveFilms'
import '../styles/variables.js'
import Login from '../components/Login'
import { GlobalStyles } from '../styles/GlobalStyles'
import { firebase } from '../firebase-config/firebaseConfig'
import { useDispatch } from 'react-redux'
import PrivateRoutes from './PrivateRoutes'
import PublicRoute from './PublicRoutes'
import Admin from '../containers/Admin'
import { login } from '../redux/loginDucks'
import { getDocOrAddDoc } from '../redux/listMoviesDucks'
import ViewFilm from '../components/ViewFilm'
import styled, { keyframes } from 'styled-components'
import variables from '../styles/variables.js'

const animateLoader = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`
const ContainerLoading = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: ${variables.background};
    width: 100vw;
    height: 100vh;
    .loader{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 5px solid #8f8f8f11;
        border-top-color: ${variables.primary};
        animation: ${animateLoader} 1s infinite ease-in-out ;
    }
`

const Routes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            setChecking(false)
            if(user?.uid){
                setIsLoggedIn(true)
                dispatch(login(user.uid, user.email, user.displayName))
                dispatch(getDocOrAddDoc(user.email))
            }
            else{
                setIsLoggedIn(false)
            }
        })
    }, [dispatch, setChecking])

    if(checking){
        return(
            <ContainerLoading>
                <img src="https://i.imgur.com/vcIFPQU.png" alt="logo" />
                <div className='loader'></div>
            </ContainerLoading>
        )
    }
    return (
        <Router>
            <GlobalStyles/>
            <Switch>
                <PrivateRoutes 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/"
                    component={ AllFilms } />
                <PrivateRoutes 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/valorados"
                    component={ MostValued } />
                <PrivateRoutes 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/guardados"
                    component={ SaveFilms } />
                <PrivateRoutes 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/admin"
                    component={ Admin } />
                <PrivateRoutes 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/view/:id"
                    component={ ViewFilm } />
                <PublicRoute 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/login"
                    component={ Login } />
                <Redirect to="/login" />
            </Switch>
        </Router>
    )
}

export default Routes
