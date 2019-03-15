import React, {PureComponent} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { requestData, deleteUser, editUser, addUser } from "../actions/index";
import styles from "./styles.less";

export class Post extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestData();
    }

    handleAdd() {
        this.props.addUser();
    }

    handleDelete(id) {
        this.props.deleteUser(id);
    }

    handleEdit(payload) {
        this.props.editUser(payload);
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item" key="button-row">
                    <button type="button" className="btn btn-primary" onClick={() => this.handleAdd()}>Add a User</button>
                </li>
                {this.props.users.map(el => (
                    <li className="list-group-item" key={el.id}>
                        <div className="row">
                            <div className="col">
                                <i onClick={() => this.handleDelete(el.id)} className={`fas fa-trash-alt ${styles.clickable}`}></i>
                            </div>
                            <div className="col">
                                <i onClick={() => this.handleEdit(el)} className={`fas fa-edit ${styles.clickable}`}></i>
                            </div>
                            <div className="col-6">
                                {el.name}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

Post.propTypes = {
    users: PropTypes.array,
    requestData: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired
};
export default connect(
    mapStateToProps,
    { requestData, deleteUser, editUser, addUser }
)(Post);