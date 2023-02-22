import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/layouts/Login";
import UserPanel from "./components/layouts/UserPanel";
import { UserProvider } from "./context/Context";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UserProvider>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/userpanel" element={<UserPanel />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
