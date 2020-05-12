import React from "react";
import { render } from "@testing-library/react";
import LiftingStateUp from "./LiftingStateUp";

test("renders learn react link", () => {
  const { getByText } = render(<LiftingStateUp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
