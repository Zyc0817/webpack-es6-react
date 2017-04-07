/**
 * Created by jingdian on 2017/3/27.
 */
let React = require('react');
let ReactDOM = require('react-dom');
let AppComponent = require('./components/index.js');
let Hello = require('./components/common.js');
ReactDOM.render(<AppComponent />, document.getElementById('content'));
ReactDOM.render(<Hello/>, document.getElementById('common'));