const actionTypes = {
  LOAD_USER: 'LOAD_USER',
  CREATE_USER: 'CREATE_USER',
  EDIT_USER: 'EDIT_USER',
  SET_LOGIN: 'SET_LOGIN',
  TOGGLE_CHECKBOX: 'TOGGLE_CHECKBOX',
}

const loadUser = (user) => {
  return {
    type: actionTypes.LOAD_USER,
    payload: {
      user: user
    }
  }
}

const createUser = (user) => {
  return {
    type: actionTypes.CREATE_USER,
    payload: {
      user: user
    }
  }
}

const setLogin = (value) => {
  return {
    type: actionTypes.SET_LOGIN,
    payload: {
      value: value
    }
  }
}

const editUser = (user) => {
  return {
    type: actionTypes.EDIT_USER,
    payload: {
      user: user
    }
  }
}

const toggleCheckbox = (id) => {
  return {
    type: actionTypes.TOGGLE_CHECKBOX,
    payload: {
      id: id
    }
  }
};

export { actionTypes, loadUser, createUser, setLogin, editUser, toggleCheckbox };