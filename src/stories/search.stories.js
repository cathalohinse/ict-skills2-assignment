import React from "react";
import Search from "../components/search";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
//import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Movies/Search",
  component: Search,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <Search movie={SampleMovie} />;

Basic.storyName = "Default";