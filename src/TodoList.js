import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List , message } from 'antd'
import store from './store/index'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changInputValue = this.changInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addItem = this.addItem.bind(this)
        store.subscribe(this.storeChange)
    }

    changInputValue(e) {
        const action = {
            type: 'changeInput',
            inputValue: e.target.value
        }
        store.dispatch(action)
    }
    addItem() {
        if(!this.state.inputValue){
            message.error('This is a normal message');
            return false;
        }
        const action = {
            type: 'addItem',
        }
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = {
            type: 'deleteItem',
            index
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    render() {
        return (
            <div>
                {/* <Alert
                    message="Success Tips"
                    description="Detailed description and advice about successful copywriting."
                    type="success"
                    showIcon
                /> */}
                <Input
                    placeholder={this.state.inputValue}
                    style={{ width: '200px' }}
                    value={this.state.inputValue}
                    onChange={this.changInputValue}
                />
                <Button type="primary" onClick={this.addItem}>增加</Button>
                <List bordered dataSource={this.state.list} renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}>

                </List>

            </div>
        );
    }
}

export default TodoList;