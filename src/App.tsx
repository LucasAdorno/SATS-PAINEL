import { ThemeProvider } from "styled-components";
import { Amplify } from "aws-amplify";
// import awsExports from "./aws-exports";
import { AppRoutes } from "./routes";
import GlobalStyles from "./styles/globalStyles";
import defaultTheme from "./styles/defaultTheme";

// Amplify.configure(awsExports);

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
