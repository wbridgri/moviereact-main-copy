import { BrowserRouter } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter
    future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
        <App />
    </BrowserRouter>
)
