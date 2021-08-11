import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default ({search}) => {

    const [similar, setSimilar] = useState([]);

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${search}/similar?api_key=4474baf247587dd6aeda2ad252fd1ba6&language=en-US&page=1`)
            .then((response) => {
                let output = [];
                for (let i = 0; i < 6; i++) {
                    output.push(response.data.results[i]);
                }
                setSimilar(output);
            });
    }, [search]);

    return (
        <Fragment>
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