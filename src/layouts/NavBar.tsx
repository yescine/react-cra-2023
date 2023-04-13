import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const listStyle:React.CSSProperties = {display: 'inline-block', marginRight: '10px',borderRadius:"1rem",padding:"1rem",border:"1px solid orange"}
const NavBar = (props: Props) => {
  return (
    <section style={{border:"2px solid blue",marginBottom:"0.1rem"}}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ul >
          <li style={listStyle}>
            <Link to="/">home</Link>
          </li>
          <li style={listStyle}>
            <Link to="/users">user</Link>
          </li>
          <li style={listStyle}>
            <Link to="/sign-up">register</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
