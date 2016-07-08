import {combineReducers} from 'redux';
import {ADD_TODO, MARK_TODO, INIT_FITMENT_LIST} from './actions';

function todos(state = [], action) {
    let newState = state.slice();
    switch (action.type) {
        case ADD_TODO :
            newState.push(action.todo);
            break;
        case MARK_TODO :
            newState[action.index].isDelete = !newState[action.index].isDelete;
            break;
    }
    return newState;
}

function fitmentList(state=window._INIT_.fitmentList, action) {
    switch(action.type) {
        case INIT_FITMENT_LIST:
            break;
    }
    // state = [
    //     {
    //         index : 1,
    //         title : "地板",
    //         titleBg : "http://www.hetaojia.com/data/upload/shop/louceng/04994290252309792.png",
    //         picBottom : "http://www.hetaojia.com/data/upload/shop/louceng/04995350932712542.png",
    //         subtitles : ["瓷砖", "地板", "辅料"],
    //         picMain : "http://www.hetaojia.com/data/upload/shop/louceng/04994296111208201.jpg",
    //         picUps : [
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04994271735618169.jpg",
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04995374995934735.jpg",
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04995374995959823.jpg"
    //         ],
    //         picDowns : [
    //             "http://www.hetaojia.com/data/upload/shop/louceng/05053041975006889.jpg",
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04993669716467521.jpg",
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04993669716471015.jpg"
    //         ]
    //     },
    //     {
    //         index : 1,
    //         title : "地板",
    //         titleBg : "http://www.hetaojia.com/data/upload/shop/louceng/04994290252309792.png",
    //         picBottom : "http://www.hetaojia.com/data/upload/shop/louceng/04995350932712542.png",
    //         subtitles : ["瓷砖", "地板", "辅料"],
    //         picMain : "http://www.hetaojia.com/data/upload/shop/louceng/04994296111208201.jpg",
    //         picUps : [
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04994271735618169.jpg",
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04995374995934735.jpg",
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04995374995959823.jpg"
    //         ],
    //         picDowns : [
    //             "http://www.hetaojia.com/data/upload/shop/louceng/05053041975006889.jpg",
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04993669716467521.jpg",
    //             "http://www.hetaojia.com/data/upload/shop/louceng/04993669716471015.jpg"
    //         ]
    //     }
    // ];
    return state;
}

function filter(state = 'SHOW_ALL', action) {
    let newState = state;
    return newState;
}

const todoApp = combineReducers({todos, fitmentList, filter});

export default todoApp;

