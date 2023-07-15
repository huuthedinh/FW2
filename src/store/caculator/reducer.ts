import { CaculatorAction } from "./action";

import * as actions from "./type"

export interface ICaculatorState {
    result: any
}

const initCaculatorState: ICaculatorState = {
    result: 0
}
const CaculatorReducer = (state: ICaculatorState = initCaculatorState, action: CaculatorAction): ICaculatorState => {
    switch (action.type) {
        case actions.ADD:
            state = {
                ...state,
                result: action.payload.num1 + action.payload.num2
            };
            break;
        case actions.SUBTRACK:
            state = {
                ...state,
                result: action.payload.num1 - action.payload.num2
            };
            break;
        case actions.MULTIPLY:
            state = {
                ...state,
                result: action.payload.num1 * action.payload.num2
            };
            break;
        case actions.DIVIDE:
            state = {
                ...state,
                result: action.payload.num1 / action.payload.num2
            };
            break;
    }
    return state;
}

export default CaculatorReducer