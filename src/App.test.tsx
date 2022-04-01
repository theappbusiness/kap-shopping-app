import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello", () => {
  render(<App />);
  const linkElement = screen.getByText(/world/i);
  expect(linkElement).toBeInTheDocument();
});
