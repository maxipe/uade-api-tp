import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CvApp from "./components/CvApp";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import blueGrey from "@mui/material/colors/blueGrey";

const theme = createTheme({
  palette: {
    primary: blueGrey,
  },
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <CvApp />
    </ThemeProvider>
  </StrictMode>
);
