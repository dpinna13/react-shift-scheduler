var React = require("react");
var helpers = require("../utils/helpers");
var ScheduleView =  require("./ScheduleView");
// var AnnouncementsBuild =  require("./AnnouncementsBuild");
// var AnnouncementsView =  require("./AnnouncementsView");

var ManagerHome = React.createClass({
    getInitialState: function() {
        return {
            title: "Scheduler",
            content: ""
        };
    },

    // componentDidMount: function() {
    //     this.getAnnouncements();
    // },

    componentDidUpdate: function(prevState) {
        if (prevState.title !== this.state.title || prevState.content !== this.state.content) {
            // this.getAnnouncements();
            console.log("nothing to do here")
        }
    },

    // getAnnouncements: function() {
    //     helpers.getAnnouncements().then(function(response) {
    //       this.setState({
    //         title: response.data[response.data.length -1].title,
    //         content: response.data[response.data.length -1].content
    //       });
    //     }.bind(this));
    // },

    render: function() {
        return (
            <div>
                <ScheduleView />
            </div>
        );
    }
});

module.exports = ManagerHome;
