import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { message } from 'antd'
import TodoListUI from './TodoListUi'
import { changInputAction, addItemAction, deleteItemAction  , getTodoList } from './store/actionCreators'
import store from './store/index'
// import axios from 'axios'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changInputValue = this.changInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        // axios.get('https://www.easy-mock.com/mock/5d54d8d3d607284b9bf198a6/api/queryList',{}).then( result => {
        //         const action = getListAction(result.data.data)
        //         store.dispatch(action)
        // }).catch( err => {
        //     console.log(err)
        // })
        const action = getTodoList()
        store.dispatch(action)
    }
    changInputValue(e) {
        const action = changInputAction(e.target.value)
        store.dispatch(action)
    }

    addItem() {
        if (!this.state.inputValue) {
            message.error('This is a normal message');
            return false;
        }
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }
    
    
    render() {

        return (
            <div>
                <TodoListUI
                    inputValue={this.state.inputValue}
                    changInputValue={this.changInputValue}
                    addItem={this.addItem}
                    list={this.state.list}
                    deleteItem={this.deleteItem}
                >
                </TodoListUI>
            </div>
        );
    }
}

export default TodoList;