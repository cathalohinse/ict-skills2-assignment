import React from "react";
import HeaderCredit from "../components/headerCredit";
import SampleCredit from "./sampleCredit";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Credits/HeaderCredit",
  component: HeaderCredit,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <HeaderCredit credit={SampleCredit} />;

Basic.storyName = "Default";