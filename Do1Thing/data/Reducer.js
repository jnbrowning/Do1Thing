import { actionTypes } from './Actions'

const _loadUser = (state, action) => {
    const {user} = action.payload;

    return{
        ...state,
        user: user
    }
}

const _setLogin = (state, action) => {
    const {value} = action.payload;

    console.log('currentState ', {
        ...state,
        loggedIn: value
    } )

    return{
        ...state,
        loggedIn: value
    }
}

const initialState = {
    user: {},
    loggedIn: false,
}

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_USER:
            return _loadUser(state, action);
        case actionTypes.SET_LOGIN:
            return _setLogin(state, action);
        default:
            return state;
    }
}

export { rootReducer };