import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Header from '../components/Header'
import ScrollHorizontal from '../components/ScrollHorizontal'
import Navigation from '../components/Navigation'
import FitmentItem from '../components/FitmentItem'
import { connect } from 'react-redux';
import './container.css'

class App extends Component {
    render() {
        const {dispatch, todos, fitmentList} = this.props;
        let fitmentItems = fitmentList.map(function (fitmentItem) {
            return (
                <FitmentItem fitmentItem={fitmentItem}/>
            );
        });
        return (
            <div className="root-container">
                <Header/>
                <Navigation />
                {fitmentItems}
                {/*<ScrollHorizontal/>*/}
                {/*<FitmentItem />*/}
                {/*<AddTodo */}
                    {/*dispatch={dispatch}/>*/}
                {/*<TodoList */}
                    {/*todos={todos}*/}
                    {/*dispatch={dispatch}/>*/}
            </div>
        );
    }
}

function select(state) {
    return state;
}

export default connect(select)(App);

