import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createUser, updateUser } from "../actions/index";

const mapStateToProps = state => {
    return { editUser: state.editUser, newUser: state.newUser};
};

class ConnectedForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editUser: undefined,
            newUser: undefined
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        let editUser = nextProps.editUser ? {...this.state.editUser, id: nextProps.editUser.id, name: nextProps.editUser.name} : undefined;
        this.setState({editUser});
        let newUser = nextProps.newUser ? {...this.state.newUser, id: nextProps.newUser.id, name: nextProps.newUser.name} : undefined;
        this.setState({newUser});
    }

    handleNewUserChange(event) {
        this.setState({newUser: {...this.state.newUser, name: event.target.value}});
    }
    handleEditUserChange(event) {
        this.setState({editUser: {...this.state.editUser, name: event.target.value}});
    }
    handleNewUserSubmit() {
        const { newUser} = this.state;
        this.props.createUser(newUser);

    }

    handleEditUserSubmit() {
        const { editUser} = this.state;
        this.props.updateUser(editUser);
    }

    renderEditUserForm() {
        const { editUser } = this.state;
        if (editUser) {
            return <div>
                <div className="form-group">
                    <label htmlFor="edit">Edit name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="edit"
                      value={editUser.name}
                      onChange={(e) => this.handleEditUserChange(e)}
                    />
                </div>
                <button onClick={() => this.handleEditUserSubmit()} className="btn btn-success btn-lg">
                    SAVE
                </button>
            </div>
        }
    }

    renderNewUserForm() {
        const { newUser } = this.state;
        if (newUser) {
            return <div>
                <div className="form-group">
                    <label htmlFor="add">Enter new user's name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="add"
                      value={newUser.name}
                      onChange={(e) => this.handleNewUserChange(e)}
                    />
                </div>
                <button  onClick={() => this.handleNewUserSubmit()} className="btn btn-success btn-lg">
                    CREATE
                </button>
            </div>
        }
    }

    render() {
        return <div>
            {this.renderNewUserForm()}
            {this.renderEditUserForm()}
        </div>
    }
}
export default connect(mapStateToProps, {createUser, updateUser})(ConnectedForm);