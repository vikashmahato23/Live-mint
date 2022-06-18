import { legacy_createStore,
combineReducers,
applyMiddleware,
compose } from "redux";
import { newsData } from "./reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    newsData:newsData
});


const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store =legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
