import { applyMiddleware, combineReducers, createStore } from "redux";
import CounterReducer, { ICounterState } from "./counter/reduce";
import thunk from "redux-thunk";
import CaculatorReducer, { ICaculatorState } from "./caculator/reducer";

export interface IRootState {
    counter: ICounterState,
    result: ICaculatorState
}

const rootReducer = combineReducers({
    counter: CounterReducer,
    result: CaculatorReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));