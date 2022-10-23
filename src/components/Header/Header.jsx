import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

function Header() {
  return (
    <div className="header">
      <Link to={"/login"}>
        <button>
          <LoginIcon />
        </button>
      </Link>
      <Link to={"/"}>
        <button>home</button>
      </Link>
    </div>
  );
}

export default Header;
