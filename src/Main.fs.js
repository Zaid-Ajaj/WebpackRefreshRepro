import { render } from "react-dom";
import { createElement } from "react";
import { App } from "./Components.fs.js";

render(
    createElement(App, null),
    document.getElementById("feliz-app")
);