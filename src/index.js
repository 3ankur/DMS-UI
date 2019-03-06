import React from 'react';
import ReactDOM from 'react-dom';

import "./vendors/bootstrap/dist/css/bootstrap.min.css";
import './vendors/font-awesome/css/font-awesome.min.css';
import './vendors/themify-icons/css/themify-icons.css';
import './vendors/flag-icon-css/css/flag-icon.min.css';
import './vendors/selectFX/css/cs-skin-elastic.css'
import './assets/css/style.css';
import './assets/css/custom.css';
// import $ from "jquery";
// import 'bootstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Container from './components/root/container/container';
import * as serviceWorker from './serviceWorker';

const store = configureStore({});

ReactDOM.render(<Provider store={store} ><Container /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
