import React from "react";
import { withRouter } from "react-router-dom";
import CreditDetails from "../components/creditDetails";
import PageTemplate from "../components/templateCreditPage";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { getCredit } from '../api/tmdb-api';

const CreditDetailsPage = (props) => {
  const { id } = props.match.params
const { data: credit, error, isLoading, isError } = useQuery(
  ["credit", { id: id }],
  getCredit
);

if (isLoading) {
  return <Spinner />;
}

if (isError) {
  return <h1>{error.message}</h1>;
}

  return (
    <>
      {credit ? (
        <>
          <PageTemplate credit={credit}>
            <CreditDetails credit={credit} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for credit details</p>
      )}
    </>
  );
};

export default withRouter(CreditDetailsPage);