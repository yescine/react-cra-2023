import React from "react";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Welcome page
      <Routes>
        <Route path="/" Component={() => <div>homepage</div>} />
        <Route path="/users" Component={() => <div>users</div>} />
        <Route path="*" Component={() => <div>not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
