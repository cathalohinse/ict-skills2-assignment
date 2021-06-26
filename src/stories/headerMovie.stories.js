import React from "react";
import HeaderMovie from "../components/headerMovie";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Movies/HeaderMovie",
  component: HeaderMovie,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <HeaderMovie movie={SampleMovie} />;

Basic.storyName = "Default";