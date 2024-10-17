import { useState } from "react";
import PropTypes from "prop-types";
import { Star } from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

// StarRating.propTypes = {
//   maxRating: PropTypes.number,
//   color: PropTypes.string,
//   size: PropTypes.number,
//   className: PropTypes.string,
//   message: PropTypes.array,
//   onRatingMovie: PropTypes.func
// };

export default function StarRating({
  maxRating = 5,
  color = "#FFC83D",
  size = 30,
  className = "",
  message = [],
  //   onRatingMovie,
}) {
  const [rating, setRating] = useState(0);
  const [temRating, setTemRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    // onRatingMovie(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    fontSize: `${size / 1.6}px`,
    color: color,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onMouseIn={() => setTemRating(i + 1)}
            onMouseOut={() => setTemRating(0)}
            full={rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxRating
          ? message[temRating ? temRating - 1 : rating - 1]
          : temRating || rating || ""}
      </p>
    </div>
  );
}
