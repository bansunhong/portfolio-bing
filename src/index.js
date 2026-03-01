import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";

// 스타일 import
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/fonts.css";
import Button from "./components/common/ui/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <App />
    </HashRouter>,
);
