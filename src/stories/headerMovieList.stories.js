import React from "react";
import HeaderMovieList from "../components/headerMovieList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Movies/HeaderMovieList",
  component: HeaderMovieList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <HeaderMovieList title="Discover Movies" />;

Basic.storyName = "Default";