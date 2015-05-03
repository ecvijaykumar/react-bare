var React = require('react');

var App = React.createClass({
    render: function() {
	return(
		<div>
		<h2>Hello From App</h2>
		</div>
	);
    }
});

React.render(<App/>, document.body);
