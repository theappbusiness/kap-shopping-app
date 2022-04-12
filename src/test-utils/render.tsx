import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styled";

// https://testing-library.com/docs/react-testing-library/setup/

const Wrapper: React.FC = ({ children }) => 
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>


const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  render(ui, { wrapper: Wrapper, ...options });
};

export { customRender as render };