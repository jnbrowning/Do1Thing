const actionTypes = {
    LOAD_USER: 'LOAD_USERS',
    CREATE_USER: 'CREATE_USER',
  }

  const loadUser = (user) => {
    console.log('loadUser action activated')
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

  export { actionTypes, loadUser, createUser };