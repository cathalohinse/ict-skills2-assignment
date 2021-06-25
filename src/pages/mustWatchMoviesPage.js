import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveMustWatch from "../components/cardIcons/removeMustWatch";

const MustWatchMoviesPage = () => {
  const {myMustWatch: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const mustWatchMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const mustWatchMovies = mustWatchMovieQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="My Must Watch Movies"
      movies={mustWatchMovies}
      action={(movie) => {
        return (
          <>
            <RemoveMustWatch movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MustWatchMoviesPage;