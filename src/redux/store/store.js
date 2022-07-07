import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import { registerReducers } from "../reducers/registerReducer";
import { fotoReducers } from "../reducers/fotoReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: registerReducers,
    fotoReducers: fotoReducers
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

)