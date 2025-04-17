import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'

export const MovieList = ({title,apiPath}) => {
  const {data : movies} = useFetch(apiPath)
  
  // console.log('API Path:', apiPath); // Debugging
  // console.log('Movies:', movies); // Debugging

  useEffect(()=>{
    document.title = title
})
  const navigator = useNavigate()

  return (
    <div>
    <main className='container'>
      {title=='Your Guide to Greate Movies' ? (
        <div className='bg-body-teritiary p-5 border mb-5'>
          <h3 className='text-primary'>Welcome to MovieHunt</h3>
          <p className='lead'>Discover movies you'll love with personalized suggestions, curated collections,and quick searches - your guide to finding great films </p>
          <button className='btn btn-primary' onClick={()=>{navigator('/movies/upcoming')}} >Explore Now</button>
        </div>
      ):''}
      <h5 className='text-danger py-2 border-bottom'>{title}</h5> 
      <h5 className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2'>
        {movies.map((movie)=>{
          return <Card key={movie.id } movie={movie}/>
        })}
      </h5>
      </main>
  </div>
  )
}
