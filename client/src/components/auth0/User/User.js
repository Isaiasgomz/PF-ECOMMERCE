import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../../Actions";


import style from "./User.module.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
const dispatch = useDispatch();
let obj={}
  if(user.email=== 'asd@asd.com'){
     obj = {
      email: user.email,
      admin: true
    }
  }else{
     obj = {
      email: user.email,
      admin: false
    }
  }

  dispatch(postUser(obj))
  
  
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