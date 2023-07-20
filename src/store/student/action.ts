import { ListDispatchType } from "./type";

export interface IStudent {
    id: number;
    name: string;
    birth: number,
}
export interface IPayLoad {
    students: IStudent[],
}
export type ListStudentAction = {
    type: 'Get',
    payload: IPayLoad
}

export const GetStudentAction = () => {
    return async (dispath: ListDispatchType) => {
        try {
            const respon = await fetch('http://localhost:3000/students');
            const data: IStudent[] = await respon.json();
            dispath({
                type: 'Get',
                payload: { students: data }
            })
        } catch (error) {
            console.log(error);
        }
    }

}