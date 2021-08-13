import React, { Fragment } from 'react';

export default ({movie}) => {

    const imageOnLoad = () => {
        console.log('image loaded');
    }
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <img src={`http://image.tmdb.org/t/p/w342//${movie.poster_path}`} alt='' className="thumbnail" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} onLoad={imageOnLoad}/>
                </div>
                <div className="col-lg-8 col-md-12">
                    <h2 style={{ color: 'white' }}>{movie.title}</h2>
                    <ul className="list-group">

                        <li className="list-group-item"><strong>Released:</strong> {movie.release_date}</li>
                        <li className="list-group-item"><strong>Adult:</strong> {movie.adult ? 'Yes' : 'No'}</li>
                        <li className="list-group-item"><strong>Vote Average:</strong> {movie.vote_average}</li>
                        <li className="list-group-item"><strong>Budget:</strong>${movie.budget === 0 ? 'N/A' : movie.budget}</li>
                        <li className="list-group-item"><strong>Language:</strong> {movie.original_language}</li>
                        <li className="list-group-item"><strong>Popularity:</strong> {movie.popularity}</li>
                        <li className="list-group-item"><strong>Revenue:</strong>${movie.revenue === 0 ? 'N/A' : movie.revenue}</li>
                        <li className="list-group-item"><strong>Runtime:</strong> {movie.runtime}</li>
                        <li className="list-group-item"><strong>Status:</strong> {movie.status}</li>
                    </ul>
                </div>
            </div>
            <div className="row" style={{ color: 'white' }}>
                <div className="well">
                    <h3>Overview</h3>
                    {movie.overview}
                    <hr />
                    <div className="panel">
                        <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: 10 }}>Homepage</a>
                        <a href="/" className="btn btn-secondary" style={{ marginLeft: 10 }}>Go Back To Search</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}