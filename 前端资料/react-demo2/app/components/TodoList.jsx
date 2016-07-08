import React, { Component } from 'react';
import { markTodo } from '../actions'


class TodoItem extends Component {
    
    clickTodo() {
        this.props.dispatch(markTodo(this.props.index));
    }
    
    render() {
        let style = {};
        if (this.props.isDelete) {
            style['text-decoration'] = 'line-through';
        } else {
            style['font-weight'] = 'bold';
        }
        return (
            <div style={style} onClick={() => this.clickTodo()}>
                 {this.props.content}
            </div>
        );
    }
}

export default class TodoList extends Component {
    render() {
        let items = this.props.todos.map((todo, index) => {
            return (
                <TodoItem
                    dispatch={this.props.dispatch}
                    isDelete={todo.isDelete}
                    content={todo.content}
                    index={index}
                />
            );
        });
        
        return (
            <div>
                {items}
            </div>
        );
    }
} 


