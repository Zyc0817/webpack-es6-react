/**
 * Created by jingdian on 2017/3/27.
 */
var React = require('react');
var Hello = React.createClass({
    getInitialState: function() {
        return {
            clickCount : 0
        };
    },
    handelClick: function(event) {
        this.setState(function(state){
            return {
                clickCount: state.clickCount + 1
            };
        });
        event.stopPropagation();
        event.preventDefault();
        return false;
    },
    render: function() {
        return (
            <h2 onClick={this.handelClick}>点我的次数为: {this.state.clickCount}</h2>
        )
    }
});
module.exports = Hello;