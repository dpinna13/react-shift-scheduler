var React = require("react");
var helpers = require("../utils/helpers");

var ManagerSchedulesCreate = React.createClass({

    getInitialState: function() {
      return {
        firstName:"",
        lastName:"",
        monday:"",
        tuesday:"",
        wednesday:"",
        thursday:"",
        friday:"",
        saturday:"",
        sunday:"",
        selectedEmpId:"",
        selectedEmpSchedule:"",
        empSchedules: [],
      };
    },

    componentDidMount: function() {
        helpers.getEmpSchedules().then(function(response) {
          if (response !== this.state.empSchedules) {
            this.setState({ empSchedules: response.data });
          }
        }.bind(this));
    },

    handleUserChange: function(index, event) {
        let updatedEmpSchedules = this.state.empSchedules.map((empSchedule, j) => {
            if(index === j){
                //index is the index of the currently selected employee
                empSchedule[event.target.name] = event.target.value;
                this.setState({selectedEmpSchedule: empSchedule});
                this.setState({ selectedEmpId: empSchedule._id });
            }
            return empSchedule;
        });
        this.setState({ empSchedules: updatedEmpSchedules});
    },

    handleUpdateEmpSchedule: function(event) {
        var saveButtonBlue = document.getElementById(event);
        // saveButtonBlue.innerHTML = "Update";
        // saveButtonBlue.className = "btn btn-small waves-effect waves-light green accent-3";

        if (this.state.selectedEmpSchedule !== "") {
            helpers.updateEmpSchedule(this.state.selectedEmpSchedule).then(function(response) {
                var empName = this.state.selectedEmpSchedule.firstName +"'s ";
                Materialize.toast(empName + "schedule updated", 2000);
                this.clearStates();
            }.bind(this));
        }
    },

    handleClearEmpSchedule: function(i,event) {
        // i is the index of the currently selected employee
        event.preventDefault();

        let updatedEmpSchedules = this.state.empSchedules.map((empSchedule, j) => {
            if(i === j){
                var saveButton = document.getElementById(i);
                // saveButton.innerHTML = "";
                saveButton.className = "btn btn-small waves-effect waves-light blue accent-3";

                empSchedule.monday = "";
                empSchedule.tuesday = "";
                empSchedule.wednesday = "";
                empSchedule.thursday = "";
                empSchedule.friday = "";
                empSchedule.saturday = "";
                empSchedule.sunday = "";
                this.state.selectedEmpSchedule = empSchedule;
            }
            return empSchedule;
        });
        this.setState({ empSchedules: updatedEmpSchedules});
    },

    clearStates: function() {
        this.setState({ firstName: "", lastName: "", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "", emp_id: "", selectedEmpSchedule: "", selectedEmpId: ""});
    },

    render: function() {
        return (
                <div className="row">
                    <div className="col m12" >
                        <div className="section">
                            <h5>Modifica Turni</h5>
                            <div className="row">
                                <div className="col m12 grey" >
                                    <h6>Week 1</h6>
                                  </div>
                                </div>
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th data-field="name">Nome</th>
                                        <th data-field="name">Luned&Igrave;</th>
                                        <th data-field="name">Marted&Igrave;</th>
                                        <th data-field="name">Mercoled&Igrave;</th>
                                        <th data-field="name">Gioved&Igrave;</th>
                                        <th data-field="name">Venerd&Igrave;</th>
                                        <th data-field="name">Sabato</th>
                                        <th data-field="name">Domenica</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.empSchedules.map(function(schedules, i) {
                                        return (
                                            <tr key={i}>
                                                <td className="fullName" id={this.state.empSchedules[i]._id}>
                                                    {schedules.firstName} {schedules.lastName}
                                                </td>
                                                <td>
                                                  <div className="">
                                                    <select className="browser-default" name="monday" value={schedules.monday} onChange={this.handleUserChange.bind(this, i)}>
                                                      <option value="Libero" defaultValue>Libero</option>
                                                      <option disabled>Feriali</option>
                                                      <option value="8 - 14">8 - 14</option>
                                                      <option value="14 - 20">14 - 20</option>
                                                      <option value="20 - 8">20 - 8</option>
                                                      <option disabled>Festivi</option>
                                                      <option value="8 - 20">8 - 20</option>
                                                      <option value="20 - 8">20 - 8</option>
                                                    </select>
                                                  </div>
                                                </td>
                                                <td>
                                                    <div className="schedule">
                                                        <select className="browser-default" name="tuesday" value={schedules.tuesday} onChange={this.handleUserChange.bind(this, i)}>
                                                            <option value="Libero" defaultValue>Libero</option>
                                                            <option disabled>Feriali</option>
                                                            <option value="8 - 14">8 - 14</option>
                                                            <option value="14 - 20">14 - 20</option>
                                                            <option value="20 - 8">20 - 8</option>
                                                            <option disabled>Festivi</option>
                                                            <option value="8 - 20">8 - 20</option>
                                                            <option value="20 - 8">20 - 8</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="schedule">
                                                        <select className="browser-default" name="wednesday" value={schedules.wednesday} onChange={this.handleUserChange.bind(this, i)}>
                                                          <option value="Libero" defaultValue>Libero</option>
                                                          <option disabled>Feriali</option>
                                                          <option value="8 - 14">8 - 14</option>
                                                          <option value="14 - 20">14 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                          <option disabled>Festivi</option>
                                                          <option value="8 - 20">8 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="schedule">
                                                        <select className="browser-default" name="thursday" value={schedules.thursday} onChange={this.handleUserChange.bind(this, i)}>
                                                          <option value="Libero" defaultValue>Libero</option>
                                                          <option disabled>Feriali</option>
                                                          <option value="8 - 14">8 - 14</option>
                                                          <option value="14 - 20">14 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                          <option disabled>Festivi</option>
                                                          <option value="8 - 20">8 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="schedule">
                                                        <select className="browser-default" name="friday" value={schedules.friday} onChange={this.handleUserChange.bind(this, i)}>
                                                          <option value="Libero" defaultValue>Libero</option>
                                                          <option disabled>Feriali</option>
                                                          <option value="8 - 14">8 - 14</option>
                                                          <option value="14 - 20">14 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                          <option disabled>Festivi</option>
                                                          <option value="8 - 20">8 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="schedule">
                                                        <select className="browser-default" name="saturday" value={schedules.saturday} onChange={this.handleUserChange.bind(this, i)}>
                                                          <option value="Libero" defaultValue>Libero</option>
                                                          <option disabled>Feriali</option>
                                                          <option value="8 - 14">8 - 14</option>
                                                          <option value="14 - 20">14 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                          <option disabled>Festivi</option>
                                                          <option value="8 - 20">8 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="schedule">
                                                        <select className="browser-default" name="sunday" value={schedules.sunday} onChange={this.handleUserChange.bind(this, i)}>
                                                          <option value="Libero" defaultValue>Libero</option>
                                                          <option disabled>Festivi</option>
                                                          <option value="8 - 20">8 - 20</option>
                                                          <option value="20 - 8">20 - 8</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button id={i} className="addSchedule" onClick={this.handleUpdateEmpSchedule.bind(this, i)} className="btn btn-small waves-effect waves-light green"><i className="material-icons">save</i></button>
                                                </td>
                                                <td>
                                                    <button id={i} className="clearSchedule" onClick={this.handleClearEmpSchedule.bind(this, i)} className="btn btn-small waves-effect waves-light teal"><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                        );
                                    }, this)}
                                </tbody>
                            </table>
                          </div>
                        </div>
                    </div>
        );
    }
});
module.exports = ManagerSchedulesCreate;
