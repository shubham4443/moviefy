// http://www.omdbapi.com/?s=home&apikey=ce6a6b34
// https://api.themoviedb.org/3/movie/550?api_key=4474baf247587dd6aeda2ad252fd1ba6
// Poster Path - http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Result from './Components/Result';
import movieDetail from './Components/movieDetail';
import TMDbLogo from './tmdblogo.svg';

function App() {

  return (
    <Router>
      <Route path="/" exact strict render={() => (<Home />)} />
      <Route path="/search-result/:searchText" exact strict component={Result} />
      <Route path="/movie-detail/:movieDetail" exact strict component={movieDetail} />
      <div className="container-fluid wow fadeIn" style={{ backgroundColor: '#131517' }}>
        <div className="row">
          <div className="col-sm-6" style={{ textAlign: 'center', padding: 100 }}>
            <h2 className="container-title">MOVIEFY</h2>
            <span style={{color: 'white'}}>Portfolio:&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="https://shubham4443.web.app/" target='_blank' rel='noreferrer noopener' style={{ textDecoration: 'none', color: 'white' }}>
            www.shubham4443.web.app
          </a>
          </div>
          <div className="col-sm-6" style={{ textAlign: 'center', padding: 100 }}>
            <img src={TMDbLogo} alt='' style={{ height: 75, width: 190 }}></img>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
