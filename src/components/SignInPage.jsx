// src/components/SignInPage.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div>
      <h2>Welcome to SAFESTEPS</h2>
      <SignIn />
    </div>
  );
};

export default SignInPage;
