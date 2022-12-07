import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" element={<ProtectedRoute component={""} />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
