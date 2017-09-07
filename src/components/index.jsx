import React from 'react';

export const Header = (props) => (
    <div>
        <input type='text' />
        <button onClick={e => {
            const el = e.target.previousSibling;
            const value = el.value.trim();
            props.add(value);
            el.value = '';
        }}>+添加</button>
    </div>
);

export const Section = (props) => (
    <ul>
        {
            props.todos.map((todo, index) => (<List key={index} {...todo} index={index} complete={props.complete} />))
        }
    </ul>
);

export const List = (props) => (
    <li onClick={() => props.complete(props.index)}>{props.text + `(${props.completed ? '已完成' : '未完成'})`}</li>
);

export const Footer = (props) => (
    <p>
        <span onClick={() => props.setFilter(props.SHOW_ALL)}>显示全部</span>
        {'   '}
        <span onClick={() => props.setFilter(props.SHOW_COMPLETED)}>显示已经完成</span>
        {'   '}
        <span onClick={() => props.setFilter(props.SHOW_ACTIVE)}>显示未完成的</span>
    </p>
);