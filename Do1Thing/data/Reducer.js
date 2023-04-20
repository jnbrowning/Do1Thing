import { actionTypes } from './Actions'
import { moduleCheckList } from './DB';

const _loadUser = (state, action) => {
    const { user } = action.payload;
    const { badges } = action.payload;

    return {
        ...state,
        user: user
    }
}

const _setLogin = (state, action) => {
    const { value } = action.payload;

    console.log('currentState ', {
        ...state,
        loggedIn: value
    })

    return {
        ...state,
        loggedIn: value
    }
}

const _toggleCheckBox = (state, action) => {
    const items = action.payload.items;
    console.log("items", items);
    return {
        ...state,
        items: items
    };
}

const initialState = {
    user: {},
    loggedIn: false,
    items: moduleCheckList,
    badges: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_USER:
            return _loadUser(state, action);
        case actionTypes.SET_LOGIN:
            return _setLogin(state, action);
        case actionTypes.TOGGLE_CHECKBOX:
            return _toggleCheckBox(state, action);
        default:
            return state;
    }
}

export { rootReducer };