import { CONSTRUCTOR_ACTION_TYPE } from "./ConstructorConstant";

const initialState = {
  currentStage: "folder",
  folders: {
    data: [],
    isPending: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
  },
  subFolders: {
    data: [],
    isPending: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
  },
  phrases: {
    data: [],
    isPending: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
  },
};

export function constructorStore(state = initialState, action) {
  switch (action.type) {
    case CONSTRUCTOR_ACTION_TYPE.GET_FOLDER_PENDING:
      return {
        ...state,
        folders: {
          ...state.folders,
          data: [],
          isPending: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
        currentStage: "folder",
      };
    case CONSTRUCTOR_ACTION_TYPE.GET_FOLDER_SUCCESS:
      return {
        ...state,
        folders: {
          ...state.folders,
          data: action.payload,
          isPending: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
        },
      };
    case CONSTRUCTOR_ACTION_TYPE.GET_FOLDER_FAILURE:
      return {
        ...state,
        folders: {
          ...state.folders,
          data: [],
          isPending: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };

    case CONSTRUCTOR_ACTION_TYPE.GET_SUBFOLDER_PENDING:
      return {
        ...state,
        subFolders: {
          ...state.subFolders,
          data: [],
          isPending: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
        currentStage: "subfolder",
      };
    case CONSTRUCTOR_ACTION_TYPE.GET_SUBFOLDER_SUCCESS:
      return {
        ...state,
        subFolders: {
          ...state.subFolders,
          data: action.payload,
          isPending: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
        },
      };
    case CONSTRUCTOR_ACTION_TYPE.GET_SUBFOLDER_FAILURE:
      return {
        ...state,
        subFolders: {
          ...state.subFolders,
          data: [],
          isPending: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };

    case CONSTRUCTOR_ACTION_TYPE.GET_PHRASE_PENDING:
      return {
        ...state,
        phrases: {
          ...state.phrases,
          data: [],
          isPending: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
        currentStage: "phrase",
      };
    case CONSTRUCTOR_ACTION_TYPE.GET_PHRASE_SUCCESS:
      return {
        ...state,
        phrases: {
          ...state.phrases,
          data: action.payload,
          isPending: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
        },
      };
    case CONSTRUCTOR_ACTION_TYPE.GET_PHRASE_FAILURE:
      return {
        ...state,
        phrases: {
          ...state.phrases,
          data: [],
          isPending: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };

    default:
      return state;
  }
}
