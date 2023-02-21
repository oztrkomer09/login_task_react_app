import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router";
import toast from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userMail, setUserMail] = useState("");
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleLogin = () => {
    if (userMail.match(regex)) {
      toast.success("Login Succesfull");
    } else {
      toast.error("Invalid Email");
      return <Navigate to="/userpanel" />;
    }
  };

  const data = { userMail, setUserMail, handleLogin };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const useUserData = () => useContext(UserContext);
