import React from "react";
import Sidebar from "./components/Sidebar";
import PostProject from "./components/PostProject";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
