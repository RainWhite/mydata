import React, {Component} from 'react';
import "./Navigation.css"
import "../commons/font.css"

class NavigationItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show : false,
            start : true
        };
    }

    mouseEnter() {
        this.setState({show : true});
        setTimeout(() => {
            this.setState({start : false});
        });
    }

    mouseLeave() {
        this.setState({show : false, start: true});
    }

    render() {
        let subRight = null;
        if (this.state.show) {
            let subRightCss = [];
            subRightCss.push("sub-right");
            if (!this.state.start) {
                subRightCss.push("sub-right-end");
            }
            let subItems = this.props.item.subitems.map(function (item) {
                return (
                    <div className="item">
                         {item}
                    </div>
                );
            });
            let bgStyle = {};
            if (!!this.props.item.pic) {
                bgStyle = {
                    "background-image" : "url(" + this.props.item.pic + ")"
                }
            }
            subRight = (
                <div className={subRightCss.join(" ")}>
                    <div className="title">aaaa >></div>
                    <div className="item-container">
                         {subItems}
                    </div>
                    <div className="pic-bottom" style={bgStyle}></div>
                </div>
            );
        }
        return (
            <div className="item" onMouseEnter={()=>{this.mouseEnter()}} onMouseLeave={()=>{this.mouseLeave()}}>
                <i className="icon-left">&#xe601;</i>
                {this.props.item.title}
                {subRight}
            </div>
        );
    }
}

export default class Navigation extends Component {
    render() {
        let tabs = this.props.main.map(function (mainItem) {
            return (
                <NavigationItem item={mainItem}/>
            );
        });
        return (
            <div className="fitment-navigation-container" >
                <div className="header-container">
                    <div className="header">
                        <div className="main">
                            <span>全部种类</span>
                            <div className="submenu-container">
                                {tabs}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-container"></div>
            </div>
        );
    }
}

Navigation.defaultProps = {
    main : [
        {
            title : "儿童房 儿童床 儿童床垫",
            subitems : ["儿童床", "儿童床", "儿童床垫", "儿童床头柜", "儿童衣柜", "儿童桌", "儿童椅", "双层床"],
            pic : "http://www.hetaojia.com/data/upload/shop/common/04939247098177600.jpg"
        },{
            title : "儿童房 儿童床 儿童床垫",
            subitems : ["儿童床", "儿童床", "儿童床垫", "儿童床头柜", "儿童衣柜", "儿童桌", "儿童椅", "双层床"],
            pic : "http://www.hetaojia.com/data/upload/shop/common/04939247098177600.jpg"
        },{
            title : "儿童房 儿童床 儿童床垫",
            subitems : ["儿童床", "儿童床", "儿童床垫", "儿童床头柜", "儿童衣柜", "儿童桌", "儿童椅", "双层床"],
            pic : "http://www.hetaojia.com/data/upload/shop/common/04939247098177600.jpg"
        },{
            title : "儿童房 儿童床 儿童床垫",
            subitems : ["儿童床", "儿童床", "儿童床垫", "儿童床头柜", "儿童衣柜", "儿童桌", "儿童椅", "双层床"],
            pic : "http://www.hetaojia.com/data/upload/shop/common/04939247098177600.jpg"
        },{
            title : "儿童房 儿童床 儿童床垫",
            subitems : ["儿童床", "儿童床", "儿童床垫", "儿童床头柜", "儿童衣柜", "儿童桌", "儿童椅", "双层床"],
            pic : "http://www.hetaojia.com/data/upload/shop/common/04939247098177600.jpg"
        },{
            title : "儿童房 儿童床 儿童床垫",
            subitems : ["儿童床", "儿童床", "儿童床垫", "儿童床头柜", "儿童衣柜", "儿童桌", "儿童椅", "双层床"],
            pic : "http://www.hetaojia.com/data/upload/shop/common/04939247098177600.jpg"
        },
    ]
};