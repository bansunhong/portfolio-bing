import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";

// 스타일 import
import "./common/styles/reset.css";
import "./common/styles/globals.css";
import "./common/styles/variables.css";
import "./common/styles/fonts.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <App />
    </HashRouter>,
);
