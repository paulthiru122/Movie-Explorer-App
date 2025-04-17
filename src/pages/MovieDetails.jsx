import React, { useEffect, useState } from 'react'
// import {useEffect} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { convertMinutes } from '../utiils/utils';

export const MovieDetails = () => {
  const params = useParams()
  const [movie,setMovie] = useState({})
  const key = import.meta.env.VITE_API_KEY;
   const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
   const image = movie.poster_path
   ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
   : 'https://via.placeholder.com/500x300?text=Image+Not+Found';

    useEffect(() => {
      async function fetchMovies() {
        try {
          const response = await fetch(url); // Await h fe
             if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const jsonData = await response.json(); // Await the JSON parsing
          setMovie(jsonData); // Safely handle results
        } catch (error) {
          console.error('Error fetching data:', error); // Handle errors
        }
      }
  
      fetchMovies();
    },[url]);
    useEffect(() => {
      if (movie.title) {
        document.title = movie.title;
      }
    }, [movie.title]);
  return (
    <main className='container'>
      <h5 className='text-danger py-2 border-bottom mb-3'>{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt={movie.title} className='img-fluid img-thumbnail' />
        </div>
        <div className="col-md-8">
          <h3 className='text-primary'>{movie.title}</h3>
          <p className='mt-3 '>{movie.overview}</p>
          {movie.genres?(
            <p className='d-flex gap-3'>{movie.genres.map((gen)=>(
              <span key={gen.id} className='badge bg-danger'>{gen.name}</span>
            )) } </p>
          ):'' }
          <p className='mt-2'>
            <i className='bi bi-star-fill text-warning'></i> {movie.vote_average} |
            <i className='bi bi-people-fill text-success'></i> {movie.vote_count}  reviews
          </p>

          <table className='table table-bordered w-50 mt-2'>
            <tbody>
              <tr>
                <th>Run Time</th>
                <td> {convertMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td> {movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td> {movie.revenue}</td>
              </tr>
              <tr>
                <th>Relese Data</th>
                <td> {movie.release_date}</td>
              </tr>
            </tbody>
          </table>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} className='btn btn-warning'>View in IMDB </a>
        </div>
      </div>
    </main>

  )
}
