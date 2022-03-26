import { HEADER_ACTION_TYPE } from "./HeaderConstant";

const initialState = {};

export function headerStore(state = initialState, action) {
  switch (action.type) {
    case HEADER_ACTION_TYPE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
