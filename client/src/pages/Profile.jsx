import { Fragment } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import useProfile from "../hooks/network/useProfile";
import ProfileView from "../components/ProfileView";

export default function Profile() {
  const { isAuthenticated, user } = useAuth0();
  const { profile, trips } = useProfile();

  return (
    <Fragment>
      {isAuthenticated ? (
        <>
          <ProfileView user={{ ...profile, ...user }} trips={trips} />
        </>
      ) : (
        <p>loading...</p>
      )}
    </Fragment>
  );
}
