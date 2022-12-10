import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
