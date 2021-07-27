import React, { useEffect, useState } from 'react'
import {  BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import AllFilms from '../containers/AllFilms'
import MostValued from '../containers/MostValued'
import SaveFilms from '../containers/SaveFilms'
import '../styles/variables.js'
import Register from '../components/Register'
import Login from '../components/Login'
import { GlobalStyles } from '../styles/GlobalStyles'
import { firebase } from '../firebase-config/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../redux/loginDucks'
import PrivateRoutes from './PrivateRoutes'
import PublicRoute from './PublicRoutes'



const Routes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user?.uid){
                setIsLoggedIn(true)
            }
            else{
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if(checking){
        return(
            <h1>cargando</h1>
        )
    }
    console.log(isLoggedIn)
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
                    path="/Valorados"
                    component={ MostValued } />
                <PrivateRoutes 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/Guardados"
                    component={ SaveFilms } />
                <PublicRoute 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/login"
                    component={ Login } />
                <PublicRoute 
                    isAuthenticated={isLoggedIn}
                    exact
                    path="/register"
                    component={ Register } />
                <Redirect to="/login" />
            </Switch>
        </Router>
    )
}

export default Routes
