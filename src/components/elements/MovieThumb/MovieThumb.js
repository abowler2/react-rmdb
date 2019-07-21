import React from 'react';
import { Link } from 'react-router-dom'
import './MovieThumb.css';
import PropTypes from 'prop-types';

const MovieThumb = ({ image, movieName, movieId, clickable }) => {
    return (
        <div className='rmdb-moviethumb'>
            {clickable ? 
            <Link to={ { pathname:`/${movieId}`, movieName: `${movieName}`}}>
                <img src={image} alt='Movie Thumb' />
            </Link>
            :
            <img src={image} alt='Movie Thumb' />
            }
        </div>
    );
};

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieID: PropTypes.number,
    movieName: PropTypes.string
}

export default MovieThumb;