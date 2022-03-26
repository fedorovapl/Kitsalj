import { combineReducers } from "redux";
import { headerStore, HEADER_STORE_NAME } from "./main/Header";
import { mainContentStore, MAIN_CONTENT_STORE_NAME } from "./main/MainContent";

export const reducers = combineReducers({
  [HEADER_STORE_NAME]: headerStore,
  [MAIN_CONTENT_STORE_NAME]: mainContentStore,
});
