import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton afterSwitchSessionUrl="/" />
      </SignedIn>
      HomePage
    </div>
  );
};

export default HomePage;
