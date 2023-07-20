import { Dispatch } from "react"
import { useDispatch } from "react-redux"
import { IncreaseCountAction } from "../../../store/counter/action";

const ComponentA = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const increase = () => {
    dispatch(IncreaseCountAction(1))
  }
  return (
    <div>
      <button onClick={increase}>+</button>

    </div>
  )
}

export default ComponentA