import React from "react";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content>
        <Routes>
          <Route path="/" Component={() => <div>homepage</div>} />
          <Route path="/users" Component={() => <div>users</div>} />
          <Route path="*" Component={() => <div>not Found</div>} />
        </Routes>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
