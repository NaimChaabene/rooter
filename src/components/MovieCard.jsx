import React from "react";
import StarRatingComponent from 'react-star-rating-component'

function MovieCard(props) {
  console.log(props)

  return (
    <div className="MovieCard">
      <h1>{props.title}</h1>
       <StarRatingComponent 
                   name="rate" 
                   starCount={5}
                    value={props.rate}
                     className='stars'
                   /> <br></br>
      <img style={{height: '200px' ,width:"80%"}} variant="top" src={props.posteUrl} />
     
    
            <p>{props.Description}</p>        
    
    </div>
  );
}

export default MovieCard;