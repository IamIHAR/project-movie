import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card({ name, date, image, rate, id, onClick }) {
  return (
    <div className="card">
      <div>{name}</div>
      <div>{date}</div>
      <div>{rate}</div>
      <div>
        <Link to={`/info/${id}`}>
          <img
            width="230"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={name}
          />
        </Link>
      </div>
      <button onClick={onClick}>add</button>
    </div>
  );
}

export default Card;
