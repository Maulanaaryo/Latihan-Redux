import { combineReducers } from "redux";

import PostingReducer from "./posting";
import ContactReducer from "./contact";
import AboutReducer from "./about";

export default combineReducers({
  PostingReducer,
  ContactReducer,
  AboutReducer,
});
