import React from 'react'

const Movie1Card = ({movie}) => {
  return (
    <div className="movie">
              <div>
                <p>{movie.Year}</p>
              </div>
              <div >
                <img src={movie.Poster!=='N/A'? movie.Poster:"https://via.placeholder.com/400" } />
              </div>
              <div>
                <span>{movie.Type}</span>
                <h3>{movie.Poster!=="N/A"?movie.Title=movie.Title:movie.Title="Search Some movie"}</h3>
              </div>
     </div>
  )
}

export default Movie1Card;
