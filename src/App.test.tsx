import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello", () => {
  render(<App />);
  const helloElement = screen.getByText(/hello/i);
  expect(helloElement).toBeInTheDocument();
});
