import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component'


function SearchBar ({setInput,inputRate,setInputRate}){

    function  StarChange2(nextValue, prevValue, name){
        setInputRate( nextValue)
          }
      

    return(
        <div className = 'searchBarContainer'>
                    <h1>Searching movies </h1>
            <input  className = 'searchBar' 
                     type = "text" 
                       placeholder = "Search by title"
                        onChange={(e) => setInput(e.target.value)}/>  
    
      <h3  >Filter the Rating :  </h3> 
      <StarRatingComponent 
                  
                   starCount={5}
                    value={inputRate} 
                     className='stars'
                     onStarClick={StarChange2} 
                                 
       />
            

        </div>
    )

}

export default SearchBar;