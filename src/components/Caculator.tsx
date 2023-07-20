import { Dispatch, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddCounterAction, DivCounterAction, MulCounterAction, SubCounterAction } from '../store/caculator/action'

const Caculator = () => {

    const [num1, setNum1] = useState<number>(0)
    const [num2, setNum2] = useState<number>(0)

    const dispatch: Dispatch<any> = useDispatch();

    const handleAdd = () => {
        dispatch(AddCounterAction(num1, num2))

    };
    const handleSubtrack = () => {
        dispatch(SubCounterAction(num1, num2))

    };
    const handleMutiply = () => {
        dispatch(MulCounterAction(num1, num2))


    };
    const handleDivide = () => {
        dispatch(DivCounterAction(num1, num2))


    };
    return (
        <div>Caculator
            <input type="number" value={num1} onChange={(e) => setNum1(+e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(+e.target.value)} />
            <br />
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtrack}>-</button>
            <button onClick={handleMutiply}>X</button>
            <button onClick={handleDivide}>:</button>
        </div>

    )
}

export default Caculator