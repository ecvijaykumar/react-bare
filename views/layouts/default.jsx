/** @jsx React.DOM */
var React = require('react');
var DefaultLayout = React.createClass({
  render: function() {
    return(
      <html>
	<head>
	<meta charSet="utf-8"/>
	<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	    <title>{this.props.title}</title>
	    <link rel="stylesheet" href="/dist/css/myapp.min.css"/>
	</head>
	<body>
	    <h1>Welcome</h1>
	    <h2>Add your jsx compiled min.js path in script path here</h2>
	    {this.props.children}
	    <script src="/dist/js/app.min.js"/>
	</body>
      </html>
    )
  }
});


module.exports = DefaultLayout;
