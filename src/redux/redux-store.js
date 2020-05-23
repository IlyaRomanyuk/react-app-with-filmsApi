import {combineReducers, createStore} from "redux";

import filmsReducer from './films-reducer';
import actorsReducer from "./actors-reducer";

let reducers = combineReducers({
    filmsPage: filmsReducer,
    actorsPage: actorsReducer
})

let store = createStore(reducers);

window.store = store;

export default store;