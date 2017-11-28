var React = require("react");
var helpers = require("../utils/helpers");

var ManagerEmployeeAll = React.createClass({
    getInitialState: function() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            allEmployees: [],
            selectedEmployee: "",
            emp_id: ""
        };
    },

    componentDidMount: function() {
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

    handleUserChange(event) {
       this.setState({ [event.target.name]: event.target.value});
    },

    handleAddForm: function(event) {
        event.preventDefault();
        helpers.addEmployee(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.phone
          ).then(function(response) {
            this.state.emp_id = response.data._id;

            helpers.addEmpSchedule(this.state.emp_id, this.state.firstName, this.state.lastName).then(function(response) {
                this.clearStates();
            }.bind(this));

        }.bind(this));
        Materialize.toast('Employee added', 3000);
        this.clearForm();
        this.getEmployees();
    },

    handleUpdateForm: function(event) {
        event.preventDefault();
        helpers.updateEmployee(
            this.state.selectedEmployee,
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.phone
          ).then(function(response) {
        }.bind(this));

        helpers.updateEmpName(this.state.emp_id, this.state.firstName, this.state.lastName).then(function(response) {
            this.clearStates();
        }.bind(this));
        Materialize.toast("Employee updated", 3000);
        this.clearForm();
        this.getEmployees();
   },

    handleRemoveForm: function(event) {
        event.preventDefault();
        helpers.removeEmployee(this.state.selectedEmployee).then(function(response) {
        }.bind(this));
        helpers.removeEmpSchedule(this.state.emp_id).then(function(response) {
            this.clearStates();
        }.bind(this));
        Materialize.toast("Employee removed", 3000);
        this.clearForm();
        this.getEmployees();
    },

    clickEmployee: function(event) {
        this.setState({selectedEmployee: event.target.id}, function() {
            for (var i = 0; i < this.state.allEmployees.length; i++) {
                if (this.state.allEmployees[i]._id == this.state.selectedEmployee) {
                    this.setState({
                        firstName: this.state.allEmployees[i].firstName,
                        lastName: this.state.allEmployees[i].lastName,
                        email: this.state.allEmployees[i].email,
                        phone: this.state.allEmployees[i].phone,
                        emp_id: this.state.selectedEmployee
                    });
                    this.activeButtons();
                }
            }
        });
    },

    newEmployee: function() {
        this.clearForm();
        this.clearStates();
        this.activeButtons();
    },

    clearForm: function() {
        var elements = document.getElementsByTagName("input");
        for (var i=0; i < elements.length; i++) {
            if ((elements[i].type == "text") || (elements[i].type == "number") || (elements[i].type == "email")) {
                elements[i].value = "";
                elements[i].classList.remove("valid");
            }
        };
        this.getEmployees();
    },

    clearStates: function() {
        this.setState(
            {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                selectedEmployee: ""
            });
    },

    activeButtons: function() {
        // don't allow updating or removing on empty form
        if (this.state.selectedEmployee == "") {
            document.getElementById("addEmployee").className = "btn btn-small waves-effect waves-light blue";
            document.getElementById("updateEmployee").className += " disabled";
            document.getElementById("removeEmployee").className += " disabled";
        } else {
            document.getElementById("addEmployee").className += " disabled";
            document.getElementById("updateEmployee").className = "btn btn-small waves-effect waves-light green";
            document.getElementById("removeEmployee").className = "btn btn-small waves-effect waves-light orange";
        }
    },

    render: function() {
        return (
            <div className="row">
                <div className="col m3">
                    <table className="highlight" id="allEmployees">
                        <thead>
                            <tr>
                                <th data-field="name">Employees</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="newEmployee" onClick={this.newEmployee}>
                                    <strong>New Employee<i className="material-icons right">add</i></strong>
                                </td>
                            </tr>
                            {this.state.allEmployees.map(function(ManagerEmployeeAll, i) {
                                return (
                                    <tr key={i}>
                                        <td onClick={this.clickEmployee} id={this.state.allEmployees[i]._id}>
                                            {ManagerEmployeeAll.firstName} {ManagerEmployeeAll.lastName}
                                        </td>
                                    </tr>
                                );
                            }, this)}
                        </tbody>
                    </table>
                </div>
                <div className="col m6">
                    <div className="row">
                        <form className="col m12" onSubmit={this.handleAddForm}>
                            <div className="row">
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        type="text"
                                        className="validate"
                                        value={this.state.firstName}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        type="text"
                                        className="validate"
                                        value={this.state.lastName}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m12 s12">
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        type="email"
                                        className="validate"
                                        value={this.state.email}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m8 s8">
                                    <input
                                        placeholder="Phone"
                                        name="phone"
                                        type="tel"
                                        className="validate"
                                        value={this.state.phone}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <button id="addEmployee" className="btn btn-small waves-effect waves-light green accent-3" type="submit" value="Submit">Add
                                        <i className="material-icons right">person_add</i>
                                    </button>
                                </div>
                                <div className="col s4">
                                    <a id="updateEmployee" className="btn btn-small waves-effect waves-light blue accent-3" onClick={this.handleUpdateForm}>Update
                                        <i className="material-icons right">edit</i>
                                    </a>
                                </div>
                                <div className="col s4">
                                    <a id="removeEmployee" className="btn btn-small waves-effect waves-light red accent-3" onClick={this.handleRemoveForm}>Remove
                                        <i className="material-icons right">delete</i>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManagerEmployeeAll;
