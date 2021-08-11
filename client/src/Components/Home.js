// http://www.omdbapi.com/?s=home&apikey=ce6a6b34
// https://api.themoviedb.org/3/movie/550?api_key=4474baf247587dd6aeda2ad252fd1ba6
// Poster Path - http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function () {

    const [searchText, onSearch] = useState('');
    const [popular, setPopular] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4474baf247587dd6aeda2ad252fd1ba6&language=en-US&page=1')
            .then((response) => {
                let output = [];
                for (let i = 0; i < 6; i++) {
                    output.push(response.data.results[i]);
                }
                setPopular(output);
            });

        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4474baf247587dd6aeda2ad252fd1ba6&language=en-US&page=1')
            .then((response) => {
                let output = [];
                for (let i = 0; i < 6; i++) {
                    output.push(response.data.results[i]);
                }
                setNowPlaying(output);

            });
    }, []);

    const handleSearch = (e) => {
        onSearch(e.target.value);
    }

    return (

        <React.Fragment>

            <div className="container text-center wow fadeIn" style={{ backgroundColor: '#1C262B', borderRadius: 5, padding: 50 }}>
                <h1 style={{ color: 'white' }}>Search Info for any Movie</h1><br />
                <input type="text" className="form-control" id="search" onChange={handleSearch} /><br />
                <Link to={`/search-result/${searchText}`}><button type="button" className="btn btn-primary">
                    <span className="glyphicon glyphicon-search"></span>
                    Search</button></Link>

            </div>
            <div className="container-fluid" style={{ padding: '0 100px' }}>
                <hr className="hr-text" />
                <h2 className="container-title">POPULAR</h2>
                <div className="row wow fadeIn" id="popular-row">
                    {popular.map((value) => (
                        <div className="well text-center col-xl-2 col-lg-3 col-md-4 col-sm-6" key={value.id}>
                            <Link to={`/movie-detail/${value.id}`} className="movie-detail">
                                <img src={`http://image.tmdb.org/t/p/w185//${value.poster_path}`} alt='' />
                                <p>{value.original_title}</p>
                            </Link>
                        </div>
                    ))}
                </div>

                <hr className="hr-text" />
                <h2 className="container-title">NOW PLAYING</h2>
                <div className="row wow fadeIn" id="now-playing-row">
                    {nowPlaying.map((value) => (
                        <div className="well text-center col-xl-2 col-lg-3 col-md-4 col-sm-6" key={value.id}>
                            <Link to={`/movie-detail/${value.id}`} className="movie-detail">
                                <img src={`http://image.tmdb.org/t/p/w185//${value.poster_path}`} alt='' />
                                <p>{value.original_title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
