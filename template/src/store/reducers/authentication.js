import { actionTypes } from '../actions/authenticaton';

const initialState = {
  token: null,
  refreshToken: null,
  isLogged: false,
  user: {
    id: null,
    name: null,
    email: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Start:
      return initialState;
    case actionTypes.Failed:
      return initialState;
    case actionTypes.Success:
      return initialState;
    case actionTypes.Logout:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
