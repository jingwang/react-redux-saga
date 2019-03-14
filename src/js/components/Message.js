import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
    return { message: state.message };
};

const ConnectedMessage = ({ message }) => (
    <h1>
        {message}
    </h1>
);

ConnectedMessage.propTypes = {
    message: PropTypes.string
};
const Message = connect(mapStateToProps)(ConnectedMessage);
export default Message;