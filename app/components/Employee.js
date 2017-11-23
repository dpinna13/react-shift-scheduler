var React = require("react");
var helpers = require("./utils/helpers");

var Employee = React.createClass({

    getInitialState: function() {
        return {
            username: "",
            picture: ""
        };
    },

    componentDidMount: function() {
       helpers.getCurrentUser().then(function(response) {
          if (response !== this.state.username) {
            this.setState({username: response.data.username });
          }
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey lighten-5">
                        <a href="/employee" className="logo blue-text text-darken-1">
                            <img id="logo" src="/assets/images/logo.png"/>
                            <span className="">Schedulr</span>
                        </a>
                    <div id="logout">
                        <a className="black-text" href="/logout">Logout</a>
                    </div>    
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Employee;