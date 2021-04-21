import React from 'react';
import './Poster.css';
import notPoster from '../../../utils/notPoster.jpg';


const Poster = ({movie}) => {
    
    return (
        <div className="poster" >
                        <img src={movie.Poster!=='N/A'? movie.Poster : notPoster}  alt="poster"/>
                        <div className="box">
                            <ul className="movie__info">
                                <li><span>Name</span>:{movie.Title}</li>
                                <li><span>Year</span>:{movie.Year}</li>
                                <li><span>imDb</span>:{movie.imdbID}</li>
                                <li><span>Type</span>:{movie.Type}</li>
                            </ul>
                        </div>
                    </div>
    )
};

export default Poster;
