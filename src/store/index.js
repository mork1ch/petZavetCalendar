import { combineReducers, legacy_createStore as createStore } from "redux";
import { datesOfPillsReducer } from "./datesOfPillsReducer"

const rootReducer = combineReducers({
    datesOfPills: datesOfPillsReducer,
})

export const store = createStore(rootReducer)