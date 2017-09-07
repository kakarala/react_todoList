import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header, Section, Footer} from '../components/index.jsx';
// 传入action creator
import { addTodo, completedTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actionType.js';

class App extends Component {
    render(){
        // 由connect包装过的组件自带了dispatch
        const { add, complete, setFilter, todos, filter } = this.props;
        return (
            <div>
                {/*用于添加list项*/}
                <Header add={add} />
                {/*用于改变成完成状态*/}
                <Section complete={complete} todos={todos} />
                {/*用于切换全部，已完成，未完成*/}
                <Footer setFilter={setFilter} {...VisibilityFilters} />
            </div>
        );
    }
}

const filterTodos = (todos, filter) => {
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
};

// 将state转换成props传递给App组件
const mapStateToProps = state => ({
    todos: filterTodos(state.todos, state.visibilityFilter),
    filter: state.visibilityFilter
});
// 将dispatch转换成props传递给App组件
const mapDispatchToProps = dispatch => ({
    add: text => dispatch(addTodo(text)),
    complete: index => dispatch(completedTodo(index)),
    setFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);