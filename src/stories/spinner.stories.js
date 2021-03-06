import React from "react";
import Spinner from "../components/spinner";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
//import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Spinner",
  component: Spinner
};

export const Basic = () => <Spinner credit={SampleMovie} />;

Basic.storyName = "Default";