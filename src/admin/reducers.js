import {USER_LOGIN} from './actions';
import _ from 'lodash';

const initialState = {
  name: '',
  password: '',
  logged: false
}

export default function loginReducer(state = initialState, action) {
  if (action.type === USER_LOGIN.FAILURE || action === USER_LOGIN.LOGOUT) {
    return _.assign({}, state, {
      name: action.name,
      password: '',
      logged: false
    });
  } else if (action.type === USER_LOGIN.SEND) {
    return _.assign({}, state, {
      password: '',
      //logged: false ????????????
    });
  } else if (action.type === USER_LOGIN.SUCCESS) {
    return _.assign({}, state, {
      name: action.name,
      password: '',
      logged: true
    });
  } else {
    console.log(action.type)
    return {}
  }
}
