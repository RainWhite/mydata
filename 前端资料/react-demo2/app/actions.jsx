
export const ADD_TODO = "ADD_TODO";
export const MARK_TODO = "MARK_TODO";

export const INIT_FITMENT_LIST = "INIT_FITMENT_LIST";

export function addTodo(todo) {
    return {
        type : ADD_TODO, 
        todo
    };
}

export function markTodo(index) {
    return {
        type : MARK_TODO,
        index
    }
}

export function initFitment() {
    return {
        type : INIT_FITMENT_LIST
    }
}