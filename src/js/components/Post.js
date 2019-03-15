import React, {Component} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { requestData, deleteUser } from "../actions/index";

export class Post extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.requestData();
    }
    handleDelete(id) {
        console.log(id);
        this.props.deleteUser(id);
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.users.map(el => (
                    <li className="list-group-item" key={el.id}>
                        <i onClick={() => this.handleDelete(el.id)} className="fas fa-trash-alt"></i> {el.name}
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
    requestData: PropTypes.func.isRequired
};
export default connect(
    mapStateToProps,
    { requestData, deleteUser }
)(Post);