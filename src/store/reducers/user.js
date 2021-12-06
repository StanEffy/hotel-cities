import {IS_AUTH_REQUIRED, SET_USER_INFO, CHANGE_AUTH_STATUS} from "../actions"
import {ActionCreator} from "../action-creators"

export const authStatus = {
  AUTH: false,
  NO_AUTH: false,
};

const initialState = {
  isAuthorizationRequired: false,
  userInfo: null
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH_REQUIRED:
      return {
        ...state,
        isAuthorizationRequired: action.payload
      }
    case SET_USER_INFO:
      console.log(action.payload)
      return {
        ...state,
        userInfo: action.payload
      }
    case CHANGE_AUTH_STATUS:
      return {
        ...state,
        isAuthorizationRequired: action.payload
      }
    default:
      return state
  }
}


export const changeAuthRequired = () => (dispatch, _, api) => {
  api.get(`/login`).then((response) => {
    dispatch(ActionCreator.authRequired(authStatus.AUTH));
  }).then((authInfo) => {
    dispatch(ActionCreator.setUserInfo(authInfo.data))
  })
    .catch((err) => {
      dispatch(ActionCreator.changeAuth(true))
    })
}
export const login = ({email, password}) => (dispatch, _, api) => (
  api.post(`/login`, {email, password}).then((res) => {
    const authInfo = res.data;
    dispatch(ActionCreator.changeAuth(authStatus.NO_AUTH))
    dispatch(ActionCreator.setUserInfo(authInfo))
  })
    .catch((err) => {
      throw err;
    })
)
