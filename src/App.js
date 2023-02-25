import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/layouts/Login";
import UserPanel from "./components/layouts/UserPanel";
import DashboardPanel from "./components/DashboardPanel";
import EditForm from "./components/EditForm";
import LoginForm from "./components/LoginForm";
import PageNotFound from "./components/layouts/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Login />}>
            <Route index element={<Navigate to="loginform" replace />} />
            <Route path="/home/loginform" element={<LoginForm />}></Route>
          </Route>
          <Route path="/userpanel" element={<UserPanel />}>
            <Route index element={<Navigate to="dashboardpanel" replace />} />
            <Route path="dashboardpanel" element={<DashboardPanel />}></Route>
            <Route path="editform" element={<EditForm />}></Route>
          </Route>
          <Route path="*" element={<Login />}>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
