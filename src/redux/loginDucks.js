import types from "./types/types"
import { firebase, google } from '../firebase-config/firebaseConfig'


// constantes


// reducer
const loginDucks = (state = {}, action) => {
    switch(action.type){
        case types.login:
            return {
                ...state,
                uid: action.payload.id,
                email: action.payload.email,
                name: action.payload.name
            }
        case types.logout:
            return {}
        default:
            return state
    }
}
export default loginDucks



// funcion para ver en reducer los datos
export const login = (id, email, name) => ({
    type: types.login,
    payload: {
        id, email, name
    }
})


// actions

export const loginGoogle = ()=> (dispatch) => {
    firebase.auth().signInWithPopup(google)
        .then(({user})=> {
            dispatch(login(user.uid, user.email))
        })
}
export const loginWhitEmailPassword = (email, password) => (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user})=>{
            dispatch(login(user.uid, user.email, user.displayName))
        })
        .catch(error => {
            throw error
        })
}
export const registerWhitEmailPassword =  (email, password, name) => (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user})=>{
            const data = await user.updateProfile({displayName: name})
            dispatch(login(email, password, name ))
        })
        .catch(error =>{
            throw error
        })
}


//salir cuenta

export const logout = () => ({
    type: types.logout
})

export const logoutEvent = () => async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout())
}