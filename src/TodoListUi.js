// import React, { Component } from 'react';
// import { Input, Button, List } from 'antd'
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div>
//                 <Input
//                     placeholder={this.props.inputValue}
//                     style={{ width: '200px' }}
//                     value={this.props.inputValue}
//                     onChange={this.props.changInputValue}
//                 />
//                 <Button type="primary" onClick={this.props.addItem}>增加</Button>
//                 <List bordered dataSource={this.props.list} renderItem={(item, index) => (<List.Item onClick={() => { this.props.deleteItem(index) }}>{item}</List.Item>)}>

//                 </List>

//             </div>
//         );
//     }
// }

// export default TodoListUI;


import React from 'react';
import { Input, Button, List } from 'antd'

const TodoListUI = (props)=> {
    return (
        <div>
            <Input
                placeholder={props.inputValue}
                style={{ width: '200px' }}
                value={props.inputValue}
                onChange={props.changInputValue}
            />
            <Button type="primary" onClick={props.addItem}>增加</Button>
            <List bordered dataSource={props.list} renderItem={(item, index) => (<List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>)}>

            </List>

        </div>
    );
}
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div>
//                 <Input
//                     placeholder={this.props.inputValue}
//                     style={{ width: '200px' }}
//                     value={this.props.inputValue}
//                     onChange={this.props.changInputValue}
//                 />
//                 <Button type="primary" onClick={this.props.addItem}>增加</Button>
//                 <List bordered dataSource={this.props.list} renderItem={(item, index) => (<List.Item onClick={() => { this.props.deleteItem(index) }}>{item}</List.Item>)}>

//                 </List>

//             </div>
//         );
//     }
// }

export default TodoListUI;