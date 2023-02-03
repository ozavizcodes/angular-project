// The purpose of this file is to create an interface of model for task if.e what it should contain
export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;

}