import { CaculatorAction } from "./action";

export const ADD = "ADD";
export const SUBTRACK = "SUBTRACK";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";


export type DispathcTypeCaCulator = (args: CaculatorAction) => CaculatorAction