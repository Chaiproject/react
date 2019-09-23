import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import Provider from 'react-redux'
import store from './store'
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';
import ViewsIndex from './pages/views/index';
import ViewsLogin from './pages/views/login';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
moment.locale('zh-cn');
ReactDOM.render(
    (
        <Router store={store}>
            <Route path="/" exact component={ViewsLogin} />
            <Route path="/TodoList" exact component={TodoList} />
            <Route path="/list/" component={ViewsIndex} />
            <Redirect to="/" />
        </Router>
    )
    , document.getElementById('root'))