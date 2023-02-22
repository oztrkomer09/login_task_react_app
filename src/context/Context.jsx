import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getDocs, collection, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //User Mail validation constants
  const [userMail, setUserMail] = useState("");
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //Read users data from firebase constants
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const colRef = collection(db, "users");
    const snapshots = await getDocs(colRef);
    const userDocs = snapshots.docs.map((doc) => doc.data());
    setUsers(userDocs);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Email validation and navigation to UserPanel
  const handleLogin = ({ navigate }) => {
    console.log(users);
    if (userMail.match(regex)) {
      toast.success("Login Succesfull!");
      setTimeout(() => {
        navigate("/userpanel");
      }, 2000);
    } else {
      toast.error("Invalid Email!");
    }
  };

  const handleLogout = ({ navigate }) => {
    toast("Logout Succesfull!", {
      icon: "👋🏻",
    });
    setUserMail("");
    navigate("/");
  };

  const data = { userMail, setUserMail, handleLogin, handleLogout, users };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const useUserData = () => useContext(UserContext);
