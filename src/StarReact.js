import React,{ useState} from 'react';
import {FaStar} from 'react-icons/fa';
import {FaCheckCircle} from "react-icons/fa";


const StarRating =() => {
    const [rating, setRating]= useState(null);
    const [hover, sethover]= useState(null);

    return <div>

        <h1>Rating Widget</h1>

        <div className="box">
        {[...Array(5)].map((star, i)=>{
            const ratingValue= i+1;

            return (

                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={()=> setRating(ratingValue)}

                    />
                    <FaStar
                        className="star"
                        color={ratingValue<= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={25}
                        onMouseEnter={()=> sethover(ratingValue)}
                        onMouseLeave={()=> sethover(null)}
                    />

                </label>
            );
        })}
        </div>
        <br/>
        <div className="box1">
            <FaCheckCircle
                className="checkCircle"
                color={"#16e216"}
                size={18}
            />

            <p className="p1">
                Thanks! You rated this {rating===1 ? " 1 star" : `${rating} stars`}
            </p>

        </div>

    </div>

}

export default StarRating
