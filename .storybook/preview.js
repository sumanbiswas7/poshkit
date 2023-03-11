import { dark, light } from "./theme";
import { DocsContainer } from "./DocsContainer";

export const parameters = {
  darkMode: {
    light,
    dark,
  },
  docs: {
    container: DocsContainer,
  },
};

// export const decorators = [
//   (Story) => (
//     <div style={{ margin: "2em" }}>
//       <Story />
//     </div>
//   ),
// ];
