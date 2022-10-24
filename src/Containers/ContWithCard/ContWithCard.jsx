import "./style.css";

import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { actionMovies } from "../../store/actions/actionMovies";
import Spinner from "../../components/Spinner/Spinner";
import { genres } from "../../constants/genres";
import { Pagination } from "@mui/material";
import { API_KEY } from "../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function ContWithCard() {
  const [id, setId] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { movies, succes, loading, favourite } = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(actionMovies.getMovies(id));
  }, [id]);
  if (loading) {
    return <Spinner />;
  }

  const handleGenres = (id) => () => {
    setId(id);
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handlePage = (e) => {
    setPage(e.target.textContent);
  };
  const handleAdd = (id) => () => {
    dispatch(actionMovies.addMovies(movies.find(i => i.id === id)))
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="cards">
      <div>
        <button onClick={handleVisible}>Genres</button>
        <Link to='/favourite'>
          <button>favourite {favourite.length}</button>
        </Link>
        {isVisible &&
          genres.map((i) => {
            return (
              <button key={i.id} onClick={handleGenres(i.id)}>
                {i.name}
              </button>
            );
          })}
      </div>
      <div className="cont-card">
        {succes &&
          movies.map((i) => {
            return (
              <Card
                key={i.id}
                name={i.title}
                date={i.release_date}
                image={i.backdrop_path}
                rate={i.vote_average}
                id={i.id}
                onClick={handleAdd(i.id)}
              />
            );
          })}
        <Pagination count={10} color="secondary" handlePage={handlePage} />
      </div>
      {
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      }
      <ToastContainer />
    </div>
  );
}

export default ContWithCard;
