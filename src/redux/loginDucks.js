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
                email: action.payload.email
            }
        case types.logout:
            return {}
        default:
            return state
    }
}
export default loginDucks



// funcion para ver en reducer los datos
export const login = (id, email) => ({
    type: types.login,
    payload: {
        id, email
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
            dispatch(login(user.uid, user.email))
        })
        .catch(error => {
            throw error
        })
}

export const registerWhitEmailPassword =  (email, password, name) => () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user})=>{
            await user.updateProfile({displayName: name})
            console.log(user)
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