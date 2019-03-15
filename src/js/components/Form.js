import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid";
import { createUser } from "../actions/index";

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { name } = this.state;
        const id = uuidv4();
        this.props.createUser({ id, name});
        this.setState({ name: "" });
    }
    render() {
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}
export default connect(null, {createUser})(ConnectedForm);