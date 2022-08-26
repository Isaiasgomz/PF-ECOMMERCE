import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch } from "react-redux";
import { adminProfile, postUser, postUserData } from "../../../Actions";


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
      email: user.email
    }
  }

  dispatch(postUser(obj))
  console.log(user)

/*   const personalData = {
    fullname: `${user.given_name} ${user.family_name}`,
    profile:user.picture,
    address: "No disponible",
    UserEmail: "No disponible",
    CP: "No disponible",
  }

  dispatch(postUserData(user.email,personalData));
  console.log(personalData.profile) */
  
  const userProfile = {
    fullname: `${user.given_name} ${user.family_name}`,
    profile: user.picture,
    email: user.email
  }
   
   dispatch(adminProfile(userProfile))
  
  
  if (isLoading) {
    return <div className={style.loading}>Loading ...</div>;
  }


  return (
    isAuthenticated && (
        <p className={style.mailUser}>{user.email}</p>
    )
  );
};

export default Profile;