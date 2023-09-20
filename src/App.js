import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Produce from "./pages/Produce";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/produce" element={<Produce />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
