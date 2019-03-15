import React from "react";
import Post from "./Post";
import Form from "./Form";
import Message from "./Message";
const App = () => (
    <div className="row">
        <div className="col">
            <h2>Remote Users</h2>
            <Post />
        </div>
        <div className="col">
            <h2>Add a User</h2>
            <Form />
            <Message />
        </div>
    </div>
);
export default App;