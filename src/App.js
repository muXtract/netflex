import React from "react"
import {useEffect} from 'react'
import { useState } from "react"
import searchIcon from "./search.svg"
import Movie1card from "./Movie1Card"



//90e23b78
const API_URL='https://www.omdbapi.com/?i=tt3896198&apikey=90e23b78' //stores data from api 


const App = () => {
  const [movies,setMovies]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");

  const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)   //fetch api call (returns a promise awaits for the response )
    const data=await response.json();  //converts in json readable form
    setMovies(data.Search);
    
  }
  useEffect(()=>{
    searchMovies('Batman');
  },[]);
  return (
    <div className="app">
        <h1 className="text-4xl">NetFlex</h1>
        <div className="search">
          <input placeholder="search for movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
          <img src={searchIcon} onClick={()=>searchMovies(searchTerm)} />
        </div>
      {
         movies?.length>0
        ? (<div className="container">
          {movies.map((movie)=>(
            <Movie1card movie={movie}/>
          ))}
          
        </div>
         ):
         <div className="empty">
          <h2>API fault</h2>
         </div>
      }


       
        
    </div>
    
  )
}

export default App
