import React, { useState } from 'react';
import MovieList from './MovieList'

function Filter  ({movies,InputSearch,inputRate}){
    
return (
<div className='movies'>
      <MovieList movies={movies.filter(
          (searchMovie) =>
            searchMovie.title
              .toLowerCase()
              .includes(InputSearch.toLowerCase().trim())
               &&
            searchMovie.rate >= inputRate)} />
     </div>
     )
}
export default Filter;