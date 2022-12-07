import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" />
          <Route path="/" element={<ProtectedRoute component={""} />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
