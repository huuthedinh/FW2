import { DispathcTypeCaCulator } from "../caculator/type"
import * as CaculatorType from "./type"

export interface IPayload {
    num1: number,
    num2: number,

}

export type CaculatorAction = {
    type: string,
    payload: IPayload
}

export function AddCounterAction(num1: number, num2: number) {

    const ADD: CaculatorAction = {
        type: CaculatorType.ADD,
        payload: {
            num1,
            num2
        }
    }
    return (dispatch: DispathcTypeCaCulator) => {
        dispatch(ADD);
    }

}
export function SubCounterAction(num1: number, num2: number) {
    const SUBTRACK: CaculatorAction = {
        type: CaculatorType.SUBTRACK,
        payload: {
            num1,
            num2
        }
    }
    return (dispatch: DispathcTypeCaCulator) => {
        dispatch(SUBTRACK);
    }

}
export function MulCounterAction(num1: number, num2: number) {
    const MULTIPLY: CaculatorAction = {
        type: CaculatorType.MULTIPLY,
        payload: {
            num1,
            num2
        }
    }
    return (dispatch: DispathcTypeCaCulator) => {
        dispatch(MULTIPLY);
    }

}
export function DivCounterAction(num1: number, num2: number) {
    const DIVIDE: CaculatorAction = {
        type: CaculatorType.DIVIDE,
        payload: {
            num1,
            num2
        }
    }
    return (dispatch: DispathcTypeCaCulator) => {
        dispatch(DIVIDE);
    }

}

