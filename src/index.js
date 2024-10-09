import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";

function CustomStarRating() {
  const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating maxRating={10} color='blue' onRatingMovie={setMovieRating} />
      <p>This Movie got {movieRating} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating />
    <StarRating
      color='red'
      size={24}
      className='test'
      message={['Ugly', 'Bad', 'OK', 'Good', 'Amazing']}
    />
    <br />
    <br />
    <CustomStarRating />
  </React.StrictMode>
);
