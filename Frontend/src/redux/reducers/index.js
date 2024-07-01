import { combineReducers } from "redux";

import auth from './auth'
import listing from './property'
import comment from './comment'

export const reducers = combineReducers({auth, listing, comment})