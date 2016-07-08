import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import { addTodo } from '../actions';

export default class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {content: ""};
    }

    render() {
        return (
            <div>
                <input ref="input" onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleKeyDown(e)}
                       value={this.state.content}/>
            </div>
        );

    }

    handleChange(e) {
        this.setState({content: e.target.value});
    }

    handleKeyDown(e) {
        if (e.keyCode == 13) {
            let todo = {
                isDelete : false,
                content : this.state.content
            };
            this.setState({content: ""});
            this.props.dispatch(addTodo(todo));
        }
    }
}