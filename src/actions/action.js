import {ADD_TASK, DELETE_TASK, COMPLETE_TASK} from "../constants/actionTypes";

export function addTask (payload) {
    return {type:ADD_TASK, payload};
}
export function deleteTask (payload){
    console.log('test')
    return {type:DELETE_TASK, payload};
}
export function completeTask (payload){
    console.log('test')
    return {type:COMPLETE_TASK, payload};
}
// export function completeTask(payload){
//     return {type:COMPLETE_TASK, payload};
// }