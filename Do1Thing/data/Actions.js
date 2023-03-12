const actionTypes = {
    LOAD_USER: 'LOAD_USERS',
    CREATE_USER: 'CREATE_USER',
    SET_LOGIN: 'SET_LOGIN',
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

  export { actionTypes, loadUser, createUser, setLogin };