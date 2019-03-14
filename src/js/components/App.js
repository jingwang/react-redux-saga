import React from "react";
import List from "./List";
import Post from "./Post";
import Form from "./Form";
import Message from "./Message";
const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Remote Articles</h2>
            <Post />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add an article</h2>
            <Form />
            <Message />
        </div>
    </div>
);
export default App;