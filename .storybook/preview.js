import { dark, light } from "./theme";
import { DocsContainer } from "./DocsContainer";

export const parameters = {
  darkMode: {
    light,
    dark,
    current: light,
  },
  docs: {
    container: DocsContainer,
  },
};
