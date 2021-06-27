import React from "react";
import PrivateRoute from "../components/privateRoute";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
//import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Authentication/PrivateRoute",
  component: PrivateRoute,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <PrivateRoute credit={SampleMovie} />;

Basic.storyName = "Default";