import {USER_LOGIN} from './actions';
import {_} from 'lodash';

const initialState = {
  name: '',
  password: '',
  logged: false
}

function loginReducer(state = initialState, action) {
  if (action === USER_LOGIN.FAILURE || action === USER_LOGIN.LOGOUT) {
    return _.assign({}, state, {
      password: ''
      logged: false
    });
  } else if (action === USER_LOGIN.SEND) {
    return _.assign({}, state, {
      password: '',
      logged: false
    });
  } else if (action === USER_LOGIN.SUCCESS) {
    return _.assign({}, state, {
      name: action.name,
      password: '',
      logged: true
    });
  }
}
