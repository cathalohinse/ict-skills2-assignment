import React from "react";
import { withRouter } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/tmdb-api';
import { getActors } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const ActorDetailsPage = (props) => {
  const { id } = props.match.params
const { data: movie, error, isLoading, isError } = useQuery(
  ["movie", { id: id }],
  getActors,
  getMovie
);

if (isLoading) {
  return <Spinner />;
}

if (isError) {
  return <h1>{error.message}</h1>;
}

  return (
    <>
    Credits:
      {movie ? (
        <>
          
            <ActorDetails movie={movie} />
          
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(ActorDetailsPage);