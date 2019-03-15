import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
    return { message: state.message };
};

const ConnectedMessage = ({ message }) => {
    if(message) {
        return <div className={`alert alert-${message.type}`} role="alert">
            {message.content}
        </div>;
    }
    return null;
};

ConnectedMessage.propTypes = {
    message: PropTypes.object
};
const Message = connect(mapStateToProps)(ConnectedMessage);
export default Message;