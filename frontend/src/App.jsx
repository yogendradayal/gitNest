import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import Like from "./pages/Like";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser, loading } = useAuthContext();
  console.log(authUser);

  if (loading) return null;

  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={!authUser ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUp /> : <Navigate to={"/"} />}
          />
          <Route
            path="/explore"
            element={authUser ? <Explore /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/like"
            element={authUser ? <Like /> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
