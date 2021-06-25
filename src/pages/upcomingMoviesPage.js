import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getUpcomingMovies} from '../api/tmdb-api';
import PlaylistAddIcon from '../components/cardIcons/addMustWatch';
import AddMustWatchIcon from '../components/cardIcons/addMustWatch';

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

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
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        //return <PlaylistAddIcon movie={movie} />
        return <AddMustWatchIcon movie={movie} />
      }}
    />
);
};

export default UpcomingMoviesPage;