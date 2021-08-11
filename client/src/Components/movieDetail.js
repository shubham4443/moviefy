import React, { useEffect } from 'react';
import '../App.css';

import Detail from './MovieDetail/detail';
import Similar from './MovieDetail/similar';
export default ({ match }) => {


  useEffect(() => {
    if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
      window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, 0);
  }

  });

  return (
    <React.Fragment>
    
      <div className="container" id="detail" style={{ marginTop: 20 }}>
        <Detail search={match.params.movieDetail} />
      </div>


      <div className="container-fluid wow fadeIn" style={{ padding: '0 100px' }}>
        <hr className="hr-text" />
        <Similar search={match.params.movieDetail} />
      </div>
    </React.Fragment>

  )
}