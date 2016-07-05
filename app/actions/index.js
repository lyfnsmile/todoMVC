'use strict';
//action type
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

export function completeTodo(index) {
  console.log(index)
    return {
        type: COMPLETE_TODO,
        index
    };
}

export function setVisibilityFilter(filter) {
    console.log(filter)
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}

//初始化
export function fetchPosts() {
    return dispatch => {
        return fetch('http://localhost:4000/db')
            .then(response => response.json())
            .then(json => dispatch(addTodo(json[0].text)))
    }
}
