import React from "react";
import MovieCredits from "../components/movieCredits";
import SampleMovie from "./sampleData";
import SampleCredit from "./sampleCredit";
import { MemoryRouter } from "react-router";
//import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Movies/MovieCredits",
  component: MovieCredits,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <MovieCredits movie={SampleMovie} credit={SampleCredit} />;

Basic.storyName = "Default";