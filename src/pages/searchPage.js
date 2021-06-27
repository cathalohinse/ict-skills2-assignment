import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getMovies} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddMustWatchIcon from '../components/cardIcons/addMustWatch';
import Search from '../components/search';

const SearchPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('search', getMovies)

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
      title="Search"
      movies={movies}
      action={(movie) => {
        return <Search movie={movie} />
      }}
    />
);
};

export default SearchPage;