export const ADD_TODO = 'ADD_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/**
 * [action creator]
 */
export const addTodo = text => ({
    type: ADD_TODO,
    text
});

export const completedTodo = index => ({
    type: COMPLETED_TODO,
    index
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});