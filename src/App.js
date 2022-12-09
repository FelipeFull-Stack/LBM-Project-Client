import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Signup } from "./Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/home" />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
