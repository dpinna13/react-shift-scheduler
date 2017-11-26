var React = require("react");
var helpers = require("../utils/helpers");

var ScheduleView = React.createClass({

    getInitialState: function() {
        return {
            empSchedules: []
        };
    },

    componentDidMount: function() {
        helpers.getEmpSchedules().then(function(response) {
            if (response !== this.state.empSchedules) {
                this.setState({ empSchedules: response.data });
            }
        }.bind(this));
    },

    render: function() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="section">
                        <h5>Week at a glance</h5>
                        <div className="row">
                                    {this.state.empSchedules.map(function(schedules, i) {
                                        return (
                                        <div className="col s12 m6">
                                        <div className="card blue-grey darken-1">
                                            <div key={i} className="card-content white-text">
                                                <span className="card-title fullName">                                        
                                                {schedules.firstName} {schedules.lastName}
                                                </span>
                                                <ul>
                                                    <li className="schedule">Monday:    {schedules.monday}</li>
                                                    <li className="schedule">Tuesday:   {schedules.tuesday}</li>
                                                    <li className="schedule">Wednesday: {schedules.wednesday}</li>
                                                    <li className="schedule">Thursday:  {schedules.thursday}</li>
                                                    <li className="schedule">Friday:    {schedules.friday}</li>
                                                    <li className="schedule">Saturday:  {schedules.saturday}</li>
                                                    <li className="schedule">Sunday:    {schedules.sunday}</li>
                                                </ul>
                                            </div>
                                            <div className="card-action">
                                                    <a href="sms:+447412285743">Send Text Message</a>
                                              </div>
                                        </div>
                                        </div>
                                    );
                                }, this)}    
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ScheduleView;