import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { AuthDisplayContextComponent } from "./context/authDisplayContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { CardCustomer } from "./components/Cards/CardCustomer";
import { CardProcess } from "./components/Cards/CardProcess";
import { CardMeeting } from "./components/Cards/CardMeeting";

function App() {
  return (
    <>
      <AuthContextComponent>
        <AuthDisplayContextComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro-cliente" element={<CardCustomer />} />
            <Route path="/cadastro-processo" element={<CardProcess />} />
            <Route path="/agendamento/:id" element={<CardMeeting />} />
            <Route path="/profile" element={<ProtectedRoute Component={Profile} />} />
          </Routes>
        </AuthDisplayContextComponent>
      </AuthContextComponent>
    </>
  );
}

export default App;
