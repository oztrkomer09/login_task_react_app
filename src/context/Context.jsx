import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
// import { getDocs, collection, } from "firebase/firestore";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
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
    const qry = query(collection(db, "users"));
    onSnapshot(qry, (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Email validation and navigation to UserPanel
  const handleLogin = ({ navigate }) => {
    if (userMail.match(regex)) {
      toast.success("Login Succesfull!");
      setTimeout(() => {
        navigate("/userpanel");
      }, 2000);
    } else {
      toast.error("Invalid Email!");
    }
  };

  //Logout function
  const handleLogout = ({ navigate }) => {
    toast("Logout Succesfull!", {
      icon: "👋🏻",
    });
    setUserMail("");
    navigate("/");
  };

  //Delete user function
  const handleDelete = (id) => {
    deleteDoc(doc(db, "users", id));
    toast("User Deleted!", {
      icon: "🗑️",
    });
  };

  const data = {
    userMail,
    setUserMail,
    handleLogin,
    handleLogout,
    users,
    handleDelete,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const useUserData = () => useContext(UserContext);
