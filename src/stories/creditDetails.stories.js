import React from "react";
import CreditDetails from "../components/creditDetails";
import SampleCredit from "./sampleCredit";
import { MemoryRouter } from "react-router";
//import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Credits/CreditDetails",
  component: CreditDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <CreditDetails credit={SampleCredit} />;

Basic.storyName = "Default";