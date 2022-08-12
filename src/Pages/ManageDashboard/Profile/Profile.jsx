import React from "react";
import auth from "../../../Auth/Firebase/Firebase.init";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <h1 className="text-2xl lg:text-4xl text-center">
        Welcome back,{" "}
        <span className="text-primary">{auth?.currentUser?.displayName}</span>
      </h1>
    </div>
  );
};

export default Profile;
