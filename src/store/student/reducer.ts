import { IStudent, ListStudentAction } from "./action"


export interface IStudentState {
    students: IStudent[];
}

const InitStudentState: IStudentState = {
    students: []
}

const StudentReducer = (state: IStudentState = InitStudentState, action: ListStudentAction): IStudentState => {
    switch (action.type) {
        case 'Get':
            state = {
                ...state,
                students: action.payload.students
            };
            break;

    }
    return state
}
export default StudentReducer