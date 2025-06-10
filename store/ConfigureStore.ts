import { combineReducers } from "@reduxjs/toolkit";

import TechNewsReducer from "./techNews/slice";

const reducers = combineReducers({
    techNewsReducer: TechNewsReducer,
});

export default reducers;