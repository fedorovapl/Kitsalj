import { HEADER_ACTION_TYPE } from "./HeaderConstant";

const initialState = {
  id: null,
  email: null,
  username: null,
  phone: null,
  first_name: null,
  last_name: null,
  middle_name: null,
  role: null,
};

export function headerStore(state = initialState, action) {
  switch (action.type) {
    case HEADER_ACTION_TYPE.LOGIN_REQUEST:
      return {
        ...state,
      };
    case HEADER_ACTION_TYPE.LOGIN_PENDING:
      return {
        ...state,
      };
    case HEADER_ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
      };
    case HEADER_ACTION_TYPE.LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
