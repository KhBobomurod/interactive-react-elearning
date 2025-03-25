// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// React Router
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { store } from "./store"; // store faylini import qilamiz

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Redux Provider qo‘shildi */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
