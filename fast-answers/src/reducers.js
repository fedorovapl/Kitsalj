import { combineReducers } from "redux";
import { headerStore, HEADER_STORE_NAME } from "./main/Header";
import { mainContentStore, MAIN_CONTENT_STORE_NAME } from "./main/MainContent";
import { moduleStore, MODULE_STORE_NAME } from "./main/components/ModuleSelect";
import { lessonStore, LESSON_STORE_NAME } from "./main/components/LessonSelect";

export const reducers = combineReducers({
  [HEADER_STORE_NAME]: headerStore,
  [MAIN_CONTENT_STORE_NAME]: mainContentStore,
  [MODULE_STORE_NAME]: moduleStore,
  [LESSON_STORE_NAME]: lessonStore,
});
