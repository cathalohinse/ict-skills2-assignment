import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getSimilarMovies } from '../api/tmdb-api';
//import PlaylistAddIcon from '../components/cardIcons/addMustWatch';

const SimilarMoviesPage = (props) => {
  const { id } = props.match.params
  const {  data, error, isLoading, isError }  = useQuery(['similar', {id: id}], getSimilarMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Similar Movies"
      movies={movies}
      action={(movie) => {
        //return <PlaylistAddIcon movie={movie} />
      }}
    />
);
};

export default SimilarMoviesPage;