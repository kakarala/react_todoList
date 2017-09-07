import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETED_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions/actionType.js';
const { SHOW_ALL } = VisibilityFilters;

// 传入默认的state值，默认是一个空的数组
const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETED_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                  completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
};

// 设置filter
const visibilityFilter = (state = SHOW_ALL, action) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const handle = combineReducers({
    todos,
    visibilityFilter
});

export default handle;