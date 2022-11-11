import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/app/app";
import "./index.css";
const root = ReactDOMClient.createRoot(document.querySelector('#root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)