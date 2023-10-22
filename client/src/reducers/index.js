import { combineReducers } from "redux";

import PostingReducer from "./posting";
import auth from "./userAuth";

export default combineReducers({
  PostingReducer,
  auth,
});
