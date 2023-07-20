
import { useSelector } from 'react-redux'
import { ICaculatorState } from '../../../store/caculator/reducer'

const ShowInfor = () => {
    const CaculatorState = useSelector(
        (state: ICaculatorState) => state.result
    )
    return (
        <h2>Result  : {CaculatorState.result}</h2>
    )
};


export default (ShowInfor)