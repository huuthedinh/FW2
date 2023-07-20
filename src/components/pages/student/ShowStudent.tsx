
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { GetStudentAction } from "../../../store/student/action";
import { IRootState } from '../../../store';

const ShowStudent = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const StudentState = useSelector(
        (state: IRootState) => state.students
    )
    useEffect(() => {
        dispatch(GetStudentAction())
    }, [dispatch])

    return (
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Birth</td>
                </tr>
                {StudentState.students.map((sv, index) => {
                    return <tr key={index}>
                        <td>{sv.id}</td>
                        <td>{sv.name}</td>
                        <td>{sv.birth}</td>
                    </tr>
                })}
            </thead>
        </table>
    )
}

export default ShowStudent