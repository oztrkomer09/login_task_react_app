import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useNavigate, Outlet } from "react-router-dom";

const UserPanel = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-slate-200 w-screen h-screen font-inter ">
      <Navbar />
      <div className=" flex h-full">
        <Sidebar navigate={navigate} />
        <Outlet context={{ navigate }} />
      </div>
    </div>
  );
};

export default UserPanel;
