import { CounterAction } from "./action";

export const INCREASE_COUNT = 'INCREASE_COUNT';

export type DispatchType = (args: CounterAction) => CounterAction