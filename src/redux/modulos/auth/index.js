const intialStore = {
  isFetching: false,
  logged: false,
  error: '',
  user: undefined,
}

const LOGIN_FETCHING = 'LOGIN_FETCHING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginFetching = () => {
  return {
    type: LOGIN_FETCHING,
  }
}

export const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    payload: response,
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  }
}

export const login = (email, password) => {
  return (dispacth) => {
    dispacth(loginFetching())
    fetch("https://backend-app-y628.herokuapp.com/auth/login", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password, 
      })
    })
    .then(async (response) => {
      const data = await response.json()
      if(response.status === 200) {
        dispacth(loginSuccess(data))
      } else {
        throw data
      }
    })
    .catch((error) => {
      dispacth(loginError(error.message))
    })
  }
}

export const reducer = (store = intialStore, action) => {
  switch (action.type) {
    case LOGIN_FETCHING: 
      return {
        ...store,
        isFetching: true
      }
    case LOGIN_SUCCESS: 
      return {
        ...store,
        isFetching: false,
        user: action.payload,
        logged: true,
      }
    case LOGIN_ERROR: 
      return {
        ...store,
        isFetching: false,
        logged: false,
        error: action.payload
      }
    default:
      return store;
  }
}
