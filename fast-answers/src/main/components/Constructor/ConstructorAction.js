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

export const editFolder = (folderId, newName, lessonId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.EDIT_FOLDER_PENDING,
    });
    try {
      await api
        .patch(`/category/${folderId}/`, {
          name: newName,
          lesson: lessonId,
        })
        .then((res) => {
          dispatch({
            type: CONSTRUCTOR_ACTION_TYPE.EDIT_FOLDER_SUCCESS,
            payload: res.data.results,
          });
        });
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.EDIT_FOLDER_SUCCESS,
        payload: e.message,
      });
    }
  };
};

export const editSubFolder = (subfolderId, newName, folderId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.EDIT_SUBFOLDER_PENDING,
    });
    try {
      await api
        .patch(`/subcategory/${subfolderId}/`, {
          name: newName,
          category: folderId,
        })
        .then((res) => {
          dispatch({
            type: CONSTRUCTOR_ACTION_TYPE.EDIT_SUBFOLDER_SUCCESS,
            payload: res.data.results,
          });
        });
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.EDIT_SUBFOLDER_SUCCESS,
        payload: e.message,
      });
    }
  };
};

export const addSubFolder = (name, folderId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.ADD_SUBFOLDER_PENDING,
    });
    try {
      await api
        .post(`/subcategory/`, { name: name, category: folderId })
        .then((res) => {
          dispatch({
            type: CONSTRUCTOR_ACTION_TYPE.ADD_SUBFOLDER_SUCCESS,
            payload: res.data.results,
          });
        })
        .then(() => dispatch(getSubFolders(folderId)));
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.ADD_SUBFOLDER_FAILURE,
        payload: e.message,
      });
    }
  };
};

export const addFolder = (name, lessonId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.ADD_FOLDER_PENDING,
    });
    try {
      await api
        .post(`/category/`, { name: name, lesson: lessonId })
        .then((res) => {
          dispatch({
            type: CONSTRUCTOR_ACTION_TYPE.ADD_FOLDER_SUCCESS,
            payload: res.data.results,
          });
        })
        .then(() => dispatch(getFolders(lessonId)));
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.ADD_FOLDER_FAILURE,
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
          payload: { data: res.data.results, currentFolder: categoryId },
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
        type: CONSTRUCTOR_ACTION_TYPE.GET_PHRASE_FAILURE,
        payload: e.message,
      });
    }
  };
};

export const editPhrases = (selectedPhraseId, selectedPhrase, subFolderId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.EDIT_PHRASE_PENDING,
    });
    try {
      await api
        .patch(`/phrase/${selectedPhraseId}/`, {
          phrase: selectedPhrase,
          subcategory: subFolderId,
        })
        .then((res) => {
          dispatch({
            type: CONSTRUCTOR_ACTION_TYPE.EDIT_PHRASE_SUCCESS,
            payload: res.data.results,
          });
        })
        .then(() => dispatch(getPhrases(subFolderId)));
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.EDIT_PHRASE_FAILURE,
        payload: e.message,
      });
    }
  };
};

export const deletePhrases = (selectedPhraseId, subFolderId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.DELETE_PHRASE_PENDING,
    });
    try {
      await api
        .delete(`/phrase/${selectedPhraseId}/`)
        .then((res) => {
          dispatch({
            type: CONSTRUCTOR_ACTION_TYPE.DELETE_PHRASE_SUCCESS,
            payload: res.data.results,
          });
        })
        .then(() => dispatch(getPhrases(subFolderId)));
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.DELETE_PHRASE_FAILURE,
        payload: e.message,
      });
    }
  };
};

export const deleteFolder = (folderId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.DELETE_FOLDER_PENDING,
    });
    try {
      await api.delete(`/category/${folderId}/`).then((res) => {
        dispatch({
          type: CONSTRUCTOR_ACTION_TYPE.DELETE_FOLDER_SUCCESS,
        });
      });
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.DELETE_FOLDER_FAILURE,
        payload: e.message,
      });
    }
  };
};

export const deleteSubFolder = (subFolderId) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.DELETE_SUBFOLDER_PENDING,
    });
    try {
      await api.delete(`/subcategory/${subFolderId}/`).then((res) => {
        dispatch({
          type: CONSTRUCTOR_ACTION_TYPE.DELETE_SUBFOLDER_SUCCESS,
        });
      });
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.DELETE_SUBFOLDER_FAILURE,
        payload: e.message,
      });
    }
  };
};

export const addPhrase = (subFolderId, phrase) => {
  return async (dispatch) => {
    dispatch({
      type: CONSTRUCTOR_ACTION_TYPE.ADD_PHRASE_PENDING,
    });
    try {
      await api
        .post(`/phrase/`, { phrase: phrase, subcategory: subFolderId })
        .then((res) => {
          dispatch({
            type: CONSTRUCTOR_ACTION_TYPE.ADD_PHRASE_SUCCESS,
            payload: res.data.results,
          });
        })
        .then(() => dispatch(getPhrases(subFolderId)));
    } catch (e) {
      dispatch({
        type: CONSTRUCTOR_ACTION_TYPE.ADD_PHRASE_FAILURE,
        payload: e.message,
      });
    }
  };
};
