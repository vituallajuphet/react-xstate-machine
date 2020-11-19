import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from 'react-service-worker';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
