import { useSelector } from "react-redux"
import { IRootState } from "../../../store"


const ComponentB = () => {
    const counterState = useSelector(
        (state: IRootState) => state.counter
    )
    return (
        <h3>Counter + {counterState.counter}  </h3>
    )
}

export default ComponentB