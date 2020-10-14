import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component'

function AddMovie({setMovies,movies}){
 
    const [Movie, setMovie] = useState({
                                         title: "",
                                         Description: "",
                                         posteUrl : "",
                                         rate : "4",
                                      });


   
                                      
  function submitMovie(event) {
    setMovies(prevMovies => {
        return [...prevMovies, Movie];
      });
      setMovie({
        title: "",
        Description: "",
        posteUrl :"",
        rate : "",
      });
      event.preventDefault();
    }
  function  StarChange(nextValue, prevValue, name){
    setMovie(prevMovie => {
      return {
        ...prevMovie,
        [name]: nextValue
      };
  })}
    
  function handleChange(event) {
    const { name, value } = event.target;

    setMovie(prevMovie => {
      return {
        ...prevMovie,
        [name]: value
      };
    });
  }

return(
    <div>
        <h1>Add a new Movie</h1>
    <form >
    
      <input
         name="title"
          onChange={handleChange}
          value={Movie.title}
          type="text"
          autoComplete="off"
        placeholder="Name of Movie?"
        
      />
      <input
          name="posteUrl"
          autoComplete="off"
          onChange={handleChange}
         value={Movie.posteUrl}
          type="text"
         placeholder="posteUrl?"
      
    />
    
  
    <textarea name="Description"  
             onChange={handleChange}
             value={Movie.Description}
             id="exampleFormControlTextarea1" 
             rows="3" 
             placeholder="Description?"></textarea>

  <div className='InputRating' >
      <h3  >Rating :  </h3> 
      <StarRatingComponent 
                   name="rate" 
                   starCount={5}
                    value={Movie.rate} 
                     className='stars'
                     onStarClick={StarChange} />

  </div>
   
      <button onClick={submitMovie} >Ajouter</button>
    </form> 
    </div>
   
)

}
export default AddMovie;