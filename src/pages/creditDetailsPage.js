import React from "react";
import { withRouter } from "react-router-dom";
import CreditDetails from "../components/creditDetails";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/tmdb-api';
import { getCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const CreditDetailsPage = (props) => {
  const { id } = props.match.params
const { data: movie, credit, error, isLoading, isError } = useQuery(
  ["movie", { id: id }],
  getCredits,
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
          
            <CreditDetails movie={movie} />
          
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(CreditDetailsPage);