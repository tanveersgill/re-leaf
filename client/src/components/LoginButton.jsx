import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import useProfile from "../hooks/network/useProfile.js";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  // const [handleProfileChange, profile] = useProfile()

  return <button onClick={
    () => {
      loginWithRedirect();
      // handleProfileChange();
    }
  }>Log In</button>;
};

export default LoginButton;