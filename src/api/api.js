import axios from 'axios'

const ERROR = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
}

export const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  }
  )
  const onSuccess = (response) => {
    return response
  }
  const onErr = (err) => {
    if (err.response.status === ERROR.UNAUTHORIZED) {
      // onUnauthorized()
      throw err;
    }
    throw err;
  }
  api.interceptors.response.use(onSuccess, onErr);

  return api;
}



