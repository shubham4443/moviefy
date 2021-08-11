// http://www.omdbapi.com/?s=home&apikey=ce6a6b34
// https://api.themoviedb.org/3/movie/550?api_key=4474baf247587dd6aeda2ad252fd1ba6
// Poster Path - http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg

import React, { useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ({ match }) {

    useEffect(() => {

        axios.get(`
        https://api.themoviedb.org/3/search/movie?api_key=4474baf247587dd6aeda2ad252fd1ba6&language=en-US&query=${match.params.searchText}&page=1&include_adult=false`)
            .then((response) => {
                let output = '';
                for (let i = 0; i < response.data.results.length; i++) {
                    output +=
                        `     
                        <div class="well text-center col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <a href="/movie-detail/${response.data.results[i].id}" class="movie-detail">
                        <img src="http://image.tmdb.org/t/p/w185//${response.data.results[i].poster_path}" />
                        <p>${response.data.results[i].original_title}</p>
                        </a>
                        </div>      
                        `
                }
                document.querySelector('#row').innerHTML = output;
            });
    }, [match.params.searchText]);

    return (

        <div className="App">
            <div className="container-fluid" style={{ padding: '0 100px' }}>
                <hr className="hr-text" />
                <div style={{ marginBottom: 20 }}>
                    <span className="container-title">SEARCH RESULT</span>
                    <Link to="/"><button type="button" className="btn btn-primary">Go Home</button></Link>
                </div>
                <div className="row wow fadeIn" id="row"></div>
            </div>

        </div>
    );
}
