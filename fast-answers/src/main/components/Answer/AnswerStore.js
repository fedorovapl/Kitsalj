import { ANSWER_ACTION_TYPE } from "./AnswerConstant";

const initialState = {
  currentAnswerValue: "",
  lastAnswer: [],

  isLastAnswerPending: false,
  isLastAnswerSuccess: false,
  isLastAnswerError: false,

  isAnswerPending: false,
  isAnswerSuccess: false,
  isAnswerError: false,
  errorMessage: null,
};

export function answerStore(state = initialState, action) {
  switch (action.type) {
    case ANSWER_ACTION_TYPE.SET_ANSWER_VALUE:
      return {
        ...state,
        currentAnswerValue: action.payload,
      };

    case ANSWER_ACTION_TYPE.POST_ANSWER_PENDING:
      return {
        ...state,
        isAnswerPending: true,
        isAnswerSuccess: false,
        isAnswerError: false,
        errorMessage: null,
      };
    case ANSWER_ACTION_TYPE.POST_ANSWER_SUCCESS:
      return {
        ...state,
        isAnswerPending: false,
        isAnswerSuccess: true,
        isAnswerError: false,
        errorMessage: null,
      };
    case ANSWER_ACTION_TYPE.POST_ANSWER_FAILURE:
      return {
        ...state,
        isAnswerPending: false,
        isAnswerSuccess: false,
        isAnswerError: true,
        errorMessage: action.payload,
      };

    case ANSWER_ACTION_TYPE.GET_LAST_ANSWER_PENDING:
      return {
        ...state,
        isLastAnswerPending: true,
        isLastAnswerSuccess: false,
        isLastAnswerError: false,
      };
    case ANSWER_ACTION_TYPE.GET_LAST_ANSWER_SUCCESS:
      return {
        ...state,
        isLastAnswerPending: false,
        isLastAnswerSuccess: true,
        isLastAnswerError: false,
        lastAnswer: action.payload,
      };
    case ANSWER_ACTION_TYPE.GET_LAST_ANSWER_FAILURE:
      return {
        ...state,
        isLastAnswerPending: false,
        isLastAnswerSuccess: false,
        isLastAnswerError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}
