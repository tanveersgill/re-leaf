import React from "react";
import "../cssFolder/LoginModal.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginModal = ({ showModal, onClose }) => {
  const { loginWithRedirect } = useAuth0();

  if (!showModal) return null;

  return (
    <div className="modal-background">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          x
        </button>
        <h2>You are not logged in</h2>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </div>
  );
};

export default LoginModal;
