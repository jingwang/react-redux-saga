import React from "react";
import { render } from "react-dom";
import store from "./js/store/index";
import Root from "./js/components/Root";

render(

  <Root store={store} />,

    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
);