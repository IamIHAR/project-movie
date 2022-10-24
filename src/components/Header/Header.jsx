import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch } from 'react-redux'
import { actionMovies } from "../../store/actions/actionMovies";

function Header() {
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    dispatch(actionMovies.getSearch(e.target.value));
    if(!e.target.value) {
      dispatch(actionMovies.getMovies())
    }
  }
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
      <input onChange={handleSearch} />
    </div>
  );
}

export default Header;
