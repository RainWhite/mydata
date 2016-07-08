import React, {Component} from 'react';

import './FitmentItem.css'

class FitmentItem extends Component {

    render() {
        let subItems = this.props.fitmentItem.subtitles.map(function (subtitle) {
            return (
                <div className="item">{subtitle}</div>
            );
        });
        let floor = this.props.fitmentItem.index + 'F';
        let picUpItems = this.props.fitmentItem.picUps.map(function (picUp) {
            return (
                <div className="item" style={{"background-image" : "url(" + picUp + ")"}}/>
            );
        });
        let picDownItems = this.props.fitmentItem.picDowns.map(function (picDown) {
            return (
                <div className="item" style={{"background-image" : "url(" + picDown + ")"}}/>
            );
        });
        return (
            <div className="fitment-item-container">
                <div className="left">
                    <div className="upper" style={{"background-image" : "url(" + this.props.fitmentItem.titleBg + ")"}}>
                        <div className="floor">{floor}</div>
                        <div className="title">{this.props.fitmentItem.title}</div>
                    </div>
                    <div className="items">
                        {subItems}
                    </div>
                    <div className="bottom" style={{"background-image" : "url(" + this.props.fitmentItem.picBottom + ")"}}>
                    </div>
                </div>
                <div className="middle" style={{"background-image" : "url(" + this.props.fitmentItem.picMain + ")"}}></div>
                <div className="right">
                    <div className="up">
                        {picUpItems}
                    </div>
                    <div className="down">
                        {picDownItems}
                    </div>
                </div>
            </div>
        );
    }
}

// FitmentItem.defaultProps = {
//     fitmentItem : {
//         index: 1,
//         title: "地板",
//         titleBg: "http://www.hetaojia.com/data/upload/shop/louceng/04994290252309792.png",
//         picBottom: "http://www.hetaojia.com/data/upload/shop/louceng/04995350932712542.png",
//         subtitles: ["瓷砖", "地板", "辅料"],
//         picMain: "http://www.hetaojia.com/data/upload/shop/louceng/04994296111208201.jpg",
//         picUps: [
//             "http://www.hetaojia.com/data/upload/shop/louceng/04994271735618169.jpg",
//             "http://www.hetaojia.com/data/upload/shop/louceng/04995374995934735.jpg",
//             "http://www.hetaojia.com/data/upload/shop/louceng/04995374995959823.jpg"
//         ],
//         picDowns: [
//             "http://www.hetaojia.com/data/upload/shop/louceng/05053041975006889.jpg",
//             "http://www.hetaojia.com/data/upload/shop/louceng/04993669716467521.jpg",
//             "http://www.hetaojia.com/data/upload/shop/louceng/04993669716471015.jpg"
//         ]
//     }
// }

export default FitmentItem