import React, { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie'
import Filter from "./components/Filter"
import SearchBar from './components/SearchBar';
import Data from './components/Data'




function App() {
const [Movies,setMovies]=useState(Data)
// searching by title of the movie
const [input, setInput] = useState("");
// searching byRate of the movie
const [inputRate,setInputRate]=useState(2);

  return (
    <div className="container">
  
     <div className='addSearch'>
       <AddMovie setMovies={setMovies} movies={Movies}/>
       <SearchBar setInput={setInput} setInputRate= {setInputRate} inputRate={inputRate} />
     </div>
      
       <Filter movies={Movies} InputSearch={input} inputRate={inputRate} />
     

    
      </div>   
  
  
  );
}

export default App;
