import React, { useState } from "react";
import "./App.css";
import AlertExample from "./AlertExample";
import AlertManager from "./AlertManager";
import { AlertProvider } from "./AlertProvider";
import AlertReducer from "./AlertReducer";

function App() {
  const initialState = {
    alerts: [],
  };
  return (
    <div className="App">
      <h1>Alert Case Study</h1>
      <AlertProvider initialState={initialState} reducer={AlertReducer}>
        <div className="AlertExample">
          <AlertExample />
        </div>
        <div className="AlertManagerContainer">
          <AlertManager />
        </div>
      </AlertProvider>
    </div>
  );
}

export default App;
