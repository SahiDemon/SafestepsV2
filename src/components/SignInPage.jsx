// src/components/SignInPage.jsx
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div>
      <h2>Welcome to SAFESTEPS</h2>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default SignInPage;
