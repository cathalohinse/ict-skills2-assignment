import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'; //Exercise 3
import Spinner from '../components/spinner'; //Exercise 3
import {getUpcomingMovies} from '../api/tmdb-api';
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies) //Exercise 3

  if (isLoading) { //Exercise 3
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
        return <PlaylistAddIcon movie={movie} />
      }}
    />
);
};

export default UpcomingMoviesPage;