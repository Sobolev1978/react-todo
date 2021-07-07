import {ADD_TASK, CHANGE_FILTER, CHECK_ALL, CHECK_TASK, DELETE_COMPLETED, DELETE_TASK} from "./actionTypes";

export const addTask = (name) => {
    return {
        type: ADD_TASK,
        name,
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id,
    }
}

export const checkTask = (id) => {
    return {
        type: CHECK_TASK,
        id,
    }
}

export const deleteCompleted = () => {
    return {
        type: DELETE_COMPLETED,
    }
}

export const checkAll = () => {
    return {
        type: CHECK_ALL,
    }
}

export const changeFilter = (newFilter) => {
    return {
        type: CHANGE_FILTER,
        newFilter,
    }
}