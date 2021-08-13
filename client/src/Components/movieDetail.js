import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

import Detail from './MovieDetail/detail';
import Similar from './MovieDetail/similar';
export default ({ match }) => {
  const [movie, getMovie] = useState({});

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.movieDetail}?api_key=4474baf247587dd6aeda2ad252fd1ba6&language=en-US`)
      .then((response) => {
        getMovie(response.data);
      })
  }, [match]);

  useEffect(() => {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }

  });

  return (
    <React.Fragment>

      <div className="container" id="detail" style={{ marginTop: 20 }}>
        <Detail movie={movie} />
      </div>


      <div className="container-fluid wow fadeIn" style={{ padding: '0 100px' }}>
        <hr className="hr-text" />
        <Similar search={match.params.movieDetail} movieTitle={movie.title} />
      </div>
    </React.Fragment>

  )
}