import { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./movie.css"

function StarRating() {
    const [rating, setRating] = useState(null);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                const [hover, setHover] = useState(null);
                return (
                    <label>
                        <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                         />
                         {/* had to download react-icons for FaStar */}
                        <FaStar
                        className="star"
                        size={50}
                        color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );

            })}
        </div>
    )
}

export default StarRating
