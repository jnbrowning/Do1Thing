import { actionTypes } from './Actions'

const _loadUser = (state, action) => {
    const { user } = action.payload;

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
    items: [
        { module: 1, id: 1, order: 1, text: 'Find out what kind of disasters can happen where you live and plan what to do in a disaster.', checked: false },
        { module: 1, id: 2, order: 2, text: 'Protect your house from damage in a disaster.', checked: false },
        { module: 1, id: 3, order: 3, text: 'Plan what to do if you have to leave your house in an emergency.', checked: false },
      ],
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