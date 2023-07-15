import * as actionType from './type'
import { DispatchType } from './type'

export type CounterAction = {
    type: string,
    payload: number
}

export function IncreaseCountAction(count: number) {

    const action: CounterAction = {
        type: actionType.INCREASE_COUNT,
        payload: count
    }
    return (dispatch: DispatchType) => {
        dispatch(action);
    }
}