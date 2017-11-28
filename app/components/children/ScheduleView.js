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
        // this.activeButtons();
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
                        <div className="row">
                        <span className="card-title fullName">
                          {schedules.firstName} {schedules.lastName}
                        </span>
                      </div>
                        <ul>
                          <li className="schedule">
                            <div className="row">
                              <div className="col s4 m6 l6">
                                Monday:
                              </div>
                              <div className="col s4 m6 l6">
                                {schedules.monday}
                              </div>
                            </div>
                          </li>

                          <li className="schedule">
                            <div className="row">
                              <div className="col s4 m6 l6">
                                Tuesday:
                              </div>
                                <div className="col s4 m6 l6">
                                  {schedules.tuesday}
                                </div>
                              </div>
                            </li>
                            <li className="schedule">
                              <div className="row">
                                <div className="col s4 m6 l6">
                                  Wednesday:
                                  </div>
                                    <div className="col s4 m6 l6">
                                  {schedules.wednesday}
                                </div>
                                </div>
                                </li>
                            <li className="schedule">
                              <div className="row">
                                <div className="col s4 m6 l6">
                                  Thursday:
                                </div>
                                    <div className="col s4 m6 l6">
                                      {schedules.thursday}
                                    </div>
                                    </div>
                                  </li>
                            <li className="schedule">
                              <div className="row">
                                <div className="col s4 m6 l6">
                                  Friday:
                                </div>
                                    <div className="col s6 m6 l6">
                                      {schedules.friday}
                                    </div>
                                    </div>
                                  </li>
                            <li className="schedule">
                              <div className="row">
                                <div className="col s4 m6 l6">
                                  Saturday:
                                </div>
                                    <div className="col s6 m6 l6">
                                      {schedules.saturday}
                                    </div>
                                    </div>
                                  </li>
                            <li className="schedule">
                              <div className="row">
                                <div className="col s4 m6 l6">
                                  Sunday:
                                </div>
                                    <div className="col s6 m6 l6">
                                      {schedules.sunday}
                                    </div>
                                    </div>
                                  </li>
                          </ul>
                        </div>
                        <div className="card-action">
                          <a href="sms:">Send Text Message</a>
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
