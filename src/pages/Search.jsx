import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components';

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    // console.log('Query Term:', queryTerm); // Debugging query term
    // console.log('Movies:', movies); // Debugging fetched movies
    document.title = `Search results for "${queryTerm}"`;
  }, [queryTerm, movies]);

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">
        {movies.length === 0
          ? `No results found for "${queryTerm}"`
          : `Results for "${queryTerm}"`}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};