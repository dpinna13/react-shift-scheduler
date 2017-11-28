var React = require("react");
var helpers = require("../utils/helpers");

var ScheduleView = React.createClass({

    getInitialState: function() {
        return {
            empSchedules: [],
            phone: ""
        };
    },


    componentDidMount: function() {
        helpers.getEmpSchedules().then(function(response) {
            if (response !== this.state.empSchedules) {
              console.log(response)
                this.setState({ empSchedules: response.data });
            }
        }.bind(this));
        this.getEmployees();
    },
    getEmployees: function() {
        helpers.getAllEmployees().then(function(response) {
            if (response !== this.state.allEmployees) {
                this.setState({ allEmployees: response.data });
                this.activeButtons();
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
                                        <div key={i} className="col s12 m6">
                                        <div className="card blue-grey darken-1">
                                            <div className="card-content white-text">
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
                                            {this.state.getEmployee.map(function(empData, i) {
                                              return (
                                                    <a href="sms:{this.state.empData.phone}">Send Text Message</a>
                                                  );
                                            }, this)}
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
// https://stackoverflow.com/questions/29218378/mobile-website-whatsapp-button-to-send-message-to-a-specific-number
module.exports = ScheduleView;
