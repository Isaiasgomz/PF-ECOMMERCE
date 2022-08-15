import { useAuth0 } from "@auth0/auth0-react";
import React from "react";


import style from "./User.module.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();



  

  if (isLoading) {
    return <div className={style.loading}>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div>
        <p className={style.mailUser}>{user.email}</p>
      </div>
    )
  );
};

export default Profile;