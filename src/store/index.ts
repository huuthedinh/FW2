import { applyMiddleware, combineReducers, createStore } from "redux";
import CounterReducer, { ICounterState } from "./counter/reduce";
import thunk from "redux-thunk";
import CaculatorReducer, { ICaculatorState } from "./caculator/reducer";
import StudentReducer, { IStudentState } from "./student/reducer";

export interface IRootState {
    counter: ICounterState,
    result: ICaculatorState,
    students: IStudentState
}

const rootReducer = combineReducers({
    counter: CounterReducer,
    result: CaculatorReducer,
    students: StudentReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));