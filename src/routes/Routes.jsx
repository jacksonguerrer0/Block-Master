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
import { listMoviesApi } from '../redux/listMoviesDucks'
import ViewFilm from '../components/ViewFilm'



const Routes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user?.uid){
                setIsLoggedIn(true)
                dispatch(login(user.uid, user.email, user.displayName))
                dispatch(listMoviesApi())
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
                    path="/view/:title"
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
