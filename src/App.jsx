import React from "react";
import Dashboard from "./Dashboard";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Ensure this path is correct
import { Container } from "@mui/material";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />

      <Container
        maxWidth={false}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SignedIn>
          <Dashboard />
        </SignedIn>
      </Container>
    </ThemeProvider>
  );
}

export default App;
