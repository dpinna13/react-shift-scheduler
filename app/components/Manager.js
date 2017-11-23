var React = require("react");
var helpers = require("./utils/helpers");

var Manager = React.createClass({

    getInitialState: function() {
        return {
            username: "",
            picture: ""
        };
    },

    componentDidMount: function() {
       helpers.getCurrentUser().then(function(response) {
          if (response !== this.state.username) {
            this.setState({ picture: response.data.picture, username: response.data.username });
        }
    }.bind(this));
   },

   render: function() {
    return (
        <div>   
            <nav>
                <div className="nav-wrapper grey lighten-5">
                    <a href="/manager" className="logo blue-text text-darken-1"><img id="logo" src="/assets/images/logo.png"/>
                    <span className="left"></span>
                    </a>
                    <ul className="right">
                        <li><a className="black-text hide-on-small-only show-on-large" href="/manager/employeeAll">Employee Management<i className="material-icons right">group</i></a></li>
                        <li><a className="black-text show-on-small hide-on-med-and-up" href="/manager/employeeAll"><i className="material-icons right">group</i></a></li>
                        <li><a className="black-text hide-on-small-only show-on-large" href="/manager/schedulesCreate">Schedules<i className="material-icons right">access_time</i></a></li>
                        <li><a className="black-text show-on-small hide-on-med-and-up" href="/manager/schedulesCreate"><i className="material-icons right">access_time</i></a></li>
                        <li><a className="black-text right" href="/logout">Logout</a></li>
                    </ul>
                </div>
            </nav>

        <div className="container">
        {this.props.children}
        </div>
        </div>
        );
    }
});

module.exports = Manager;