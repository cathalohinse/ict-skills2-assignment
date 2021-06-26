import React from "react";
import TemplateCreditPage from "../components/templateCreditPage";
import SampleCredit from "./sampleCredit";
import { MemoryRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "react-query";
//import MoviesContextProvider from "../contexts/moviesContext";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });

export default {
  title: "Credits/TemplateCreditPage",
  component: TemplateCreditPage,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
  ],
};

export const Basic = () => <TemplateCreditPage credit={SampleCredit} />;

Basic.storyName = "Default";