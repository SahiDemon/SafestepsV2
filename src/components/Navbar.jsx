import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function Navbar() {
  return (
    <div>
      <Alert
        severity="success"
        sx={{
          //   margin: "10px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="flex">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Alert>
    </div>
  );
}

export default Navbar;
