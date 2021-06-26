import React from "react";
import CreditDetails from "../components/creditDetails";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
//import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Credit Details Page/CreditDetails",
  component: CreditDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <CreditDetails credit={SampleMovie} />;

Basic.storyName = "Default";