import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
// import { getDocs, collection, } from "firebase/firestore";
import {
  collection,
  query,
  onSnapshot,
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
  const [loading, setLoading] = useState(true);

  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    const qry = await query(collection(db, "users"));
    await onSnapshot(qry, (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
    if (window.confirm("Are you sure you want to delete that user?")) {
      deleteDoc(doc(db, "users", id));
      toast("User Deleted!", {
        icon: "🗑️",
      });
    }
  };

  //Edit user function
  const handleEdit = (user, { navigate }) => {
    setEditUser(user);
    navigate("/userpanel/editform");
  };

  const data = {
    userMail,
    setUserMail,
    handleLogin,
    handleLogout,
    users,
    handleDelete,
    loading,
    handleEdit,
    editUser,
    setEditUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const useUserData = () => useContext(UserContext);
