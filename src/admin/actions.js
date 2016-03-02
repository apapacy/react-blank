/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const USER_LOGIN = {
  SEND: 'USER_LOGIN_SEND',
  SUCCESS: 'USER_LOGIN_SUCCESS',
  FAILURE: 'USER_LOGIN_FAILURE',
  LOGOUT: 'USER_LOGIN_LOGOUT'
}

//export default USER_LOGIN;
/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function userLoginSend(name, password) {
  return {
    type: USER_LOGIN.SEND,
    name,
    password
  }
}

export function userLoginSuccess(name, responce) {
  return {
    type: USER_LOGIN.SUCCESS,
    name,
    response
  }
}

export function userLoginFailure(name, error) {
  return {
    type: USER_LOGIN.FAILURE,
    name,
    error
  }
}

export function userLogoute(name, responce) {
  return {
    type: USER_LOGIN.LOGOUT,
    eresponce
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}


export function loadPostsSuccess(userId, response) {
  return {
    type: 'LOAD_POSTS_SUCCESS',
    userId,
    response
  };
}

export function loadPostsFailure(userId, error) {
  return {
    type: 'LOAD_POSTS_FAILURE',
    userId,
    error
  };
}

export function loadPostsRequest(userId) {
  return {
    type: 'LOAD_POSTS_REQUEST',
    userId
  };
}
