import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { RoomProvider } from "./context";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  rootElement
);
