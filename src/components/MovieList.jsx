import React, { useState } from 'react';
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom';


function MovieList ({movies}){

    return ( 
        <>
          {movies.map((MovieItem) => {
                                      return (
                                        <Link to={`/description/${MovieItem.Description}/${MovieItem.video}`} style={{textDecoration : "none", color :'#473531'}}>
                                             <MovieCard 
                                                     title={MovieItem.title}
                                                     Description={MovieItem.Description}
                                                     rate={MovieItem.rate} 
                                                         posteUrl={MovieItem.posteUrl}
                                                     /> 
                                        </Link>             
          )})} 
       </>
    )
    
}



    export default MovieList;