import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Users />
    </div>
  );
};

export default App;
