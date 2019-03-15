import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getMessageState} from "../selectors";

const mapStateToProps = state => {
    return { message: getMessageState(state) };
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