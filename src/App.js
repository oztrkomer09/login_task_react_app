import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/layouts/Login";
import UserPanel from "./components/layouts/UserPanel";
import DashboardPanel from "./components/DashboardPanel";
import EditForm from "./components/EditForm";
import { Toaster } from "react-hot-toast";
// import { useUserData } from "./context/Context";

function App() {
  // const { userMail } = useUserData();
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/userpanel" element={<UserPanel />}>
            <Route index element={<Navigate to="dashboardpanel" replace />} />
            <Route path="dashboardpanel" element={<DashboardPanel />}></Route>
            <Route path="editform" element={<EditForm />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
