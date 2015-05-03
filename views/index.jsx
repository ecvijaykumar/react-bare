/** @jsx React.DOM */

var React = require('react');
var DefaultLayout = require('./layouts/default');


module.exports = React.createClass({
    render: function() {
	console.log("React Index Page")
	return (
	    <DefaultLayout title={this.props.title}>
	    </DefaultLayout>
	); 
    }
});


