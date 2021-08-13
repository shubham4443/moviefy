import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default ({search, movieTitle}) => {
    const [similar, setSimilar] = useState([]);
    const [recommended, setRecommended] = useState([]);

    const getRecommendedMovies = async (movies) => {
        let recommendedMovies = [];
        try {
            for (let mov of movies) {
                const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4474baf247587dd6aeda2ad252fd1ba6&language=en-US&query=${mov}&page=1&include_adult=false`)
                recommendedMovies.push(res.data.results[0]);
            }
        } catch (err) {

        }
        return recommendedMovies.filter(val => val);
    }

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${search}/similar?api_key=4474baf247587dd6aeda2ad252fd1ba6&language=en-US&page=1`)
            .then((response) => {
                let output = [];
                for (let i = 0; i < 6; i++) {
                    output.push(response.data.results[i]);
                }
                setSimilar(output);
            });

        if (movieTitle) {
            axios.get(`http://127.0.0.1:5000/recommend?movie=${movieTitle}`)
            .then((response) => {
                let movies = response.data.movies;
                movies = movies.map(val => {
                    if (val.indexOf("(") !== -1) {
                        return val.slice(0, val.length - 7);
                    }
                    return val;
                })

                getRecommendedMovies(movies)
                .then(res => setRecommended(res))
            })
        }
    }, [search, movieTitle]);
    console.log("RECOMMENDED", recommended)
    return (
        <Fragment>
            <h2 className="container-title">RECOMMENDED FOR YOU</h2>
            <div className="row wow fadeIn" id="row">
                {recommended.map((value) => (
                    <div className="well text-center col-xl-2 col-lg-3 col-md-4 col-sm-6" key={value.id}>
                        <Link to={`/movie-detail/${value.id}`} className="movie-detail">
                            <img src={`http://image.tmdb.org/t/p/w185//${value.poster_path}`} alt='' />
                            <p>{value.original_title}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <hr className="hr-text" />
            
            <h2 className="container-title">SIMILAR MOVIES</h2>
            <div className="row wow fadeIn" id="row">
                {similar.map((value) => (
                    <div className="well text-center col-xl-2 col-lg-3 col-md-4 col-sm-6" key={value.id}>
                        <Link to={`/movie-detail/${value.id}`} className="movie-detail">
                            <img src={`http://image.tmdb.org/t/p/w185//${value.poster_path}`} alt='' />
                            <p>{value.original_title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}