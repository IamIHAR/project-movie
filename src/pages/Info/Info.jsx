import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionMovies } from '../../store/actions/actionMovies'
import YouTube from 'react-youtube';

function Info() {
  const params = useParams();
  const id = params.id.slice(1)
  const dispatch = useDispatch()
  const { videos } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(actionMovies.getInfo(id))
  },[])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <div>{console.log(videos)}
  <YouTube videoId={videos.key} opts={opts} />
  </div>;
}

export default Info;
