import { CounterAction } from "./action"
import * as actions from './type'
export interface ICounterState {
    counter: number
}

const initCounterState: ICounterState = {
    counter: 0
}

const CounterReducer = (state: ICounterState = initCounterState, action: CounterAction): ICounterState => {
    switch (action.type) {
        case actions.INCREASE_COUNT:
            state = {
                ...state,
                counter: state.counter + action.payload
            }
    }
    return state;
}
export default CounterReducer
