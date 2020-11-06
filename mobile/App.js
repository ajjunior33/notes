import { StatusBar } from "expo-status-bar";
import React from "react";

import Router from "./src/routes.js";
function App() {
  return (
    <>
      <StatusBar />
      <Router />
    </>
  );
}

export default App;
