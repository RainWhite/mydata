import React, {Component} from 'react';

import './ScrollHorizontal.css'

export default class ScrollHorizontal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            length: 5,
            current: 0,
            children : []
        };
    }

    componentDidMount() {
        setInterval(() => {
            let current = this.state.current + 1;
            current = current % this.state.length;
            this.setState({ current: current});
            if (current == 0) {
                setTimeout(() =>{
                    current++;
                    this.setState({ current: current});
                }, 100);
            }
        }, 5000);
    }



    render() {
        let item1 = (
            <div className="scroll-item scroll-item-1" ref="1"></div>
        );
        let item2 = (
            <div className="scroll-item scroll-item-2" ref='2'></div>
        );
        let item3 = (
            <div className="scroll-item scroll-item-3" ref='3'></div>
        );
        let item4 = (
            <div className="scroll-item scroll-item-4" ref='4'></div>
        );

        let items = Array.of(item1, item2, item3, item4);
        items.push(item1);
        let offset = (this.state.current * 200 * -1) + 'px';
        let value = `translate3d(${offset}, 0px, 0px)`;
        let style = { transform: value};

        let scrollCss = 'scroll-items-container';
        if (this.state.current != 0) {
            scrollCss += ' scroll-in';
        }
        return (
            <div className="scroll-container" ref="container">
                <div className={scrollCss} style={style}>
                {items}
                </div>    
            </div>
        );
    }
}