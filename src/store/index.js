import { combineReducers, legacy_createStore as createStore } from "redux";
import { dateReducer } from "./dateReducer";
import { datesOfPillsReducer } from "./datesOfPillsReducer";

const rootReducer = combineReducers({
	date: dateReducer,
	datesOfPills: datesOfPillsReducer,
});

export const store = createStore(rootReducer);
