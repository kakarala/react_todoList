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

// combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数
// 合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象
// state 对象的结构由传入的多个 reducer 的 key 决定
// 最终，state 对象的结构会是这样的：
// {
//      reducer1: ...
//      reducer2: ...
// }
const handle = combineReducers({
    todos,
    visibilityFilter
});

export default handle;