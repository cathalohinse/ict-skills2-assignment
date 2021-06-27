import React from "react";
import MovieReview from "../components/movieReview";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
//import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Reviews/MovieReview",
  component: MovieReview
};

export const Basic = () => <MovieReview review={SampleMovie} />;

Basic.storyName = "Default";