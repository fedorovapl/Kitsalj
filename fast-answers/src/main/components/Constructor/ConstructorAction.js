import { CONSTRUCTOR_ACTION_TYPE } from "./ConstructorConstant";
import api from "../../services/api";

export const getFolders = (lessonId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.GET_FOLDER_PENDING,
    });
    try {
      await api.get(`/category/?lesson=${lessonId}`).then((res) => {
        dispatch({
          type: CONSTRUCTOR_ACTION_TYPE.GET_FOLDER_SUCCESS,
          payload: res.data.results,
        });
      });
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.GET_FOLDER_SUCCESS,
        payload: e.message,
      });
    }
  };
};

export const getSubFolders = (categoryId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.GET_SUBFOLDER_PENDING,
    });
    try {
      await api.get(`/subcategory/?category=${categoryId}`).then((res) => {
        dispatch({
          type: CONSTRUCTOR_ACTION_TYPE.GET_SUBFOLDER_SUCCESS,
          payload: res.data.results,
        });
      });
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.GET_SUBFOLDER_SUCCESS,
        payload: e.message,
      });
    }
  };
};

export const getPhrases = (subCategoryId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.GET_PHRASE_PENDING,
    });
    try {
      await api.get(`/phrase/?subcategory=${subCategoryId}`).then((res) => {
        dispatch({
          type: CONSTRUCTOR_ACTION_TYPE.GET_PHRASE_SUCCESS,
          payload: res.data.results,
        });
      });
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.GET_PHRASE_SUCCESS,
        payload: e.message,
      });
    }
  };
};
