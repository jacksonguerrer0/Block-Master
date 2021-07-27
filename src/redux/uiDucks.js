import types from "./types/types"


// constantes
const initialState = {
    msjError: null,
    loading: false
}

// reducer
const uiDucks = (state = initialState, action) => {
    switch(action.type){
        case types.uiSetError:
            return {
                ...state,
                msjError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msjError: null
            }
        default:
            return state

    }
}
export default uiDucks
// actions

export const setError = (error)  => {
    return({
        type: types.uiSetError,
        payload: error
    })
}
export const removeError = () => {
    return({
        type: types.uiRemoveError
    })
}