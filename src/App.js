import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { AuthDisplayContextComponent } from "./context/authDisplayContext";
import { InfoContextComponent } from "./context/infoContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { DetailPage } from "./pages/DetailPage";
import { CardCustomer } from "./components/Cards/CreateCards/CardCustomer";
import { CardProcess } from "./components/Cards/CreateCards/CardProcess";
import { CardMeeting } from "./components/Cards/CreateCards/CardMeeting";
import { EditCustomer } from "./pages/EditPage/EditCustomer";
import { EditMeeting } from "./pages/EditPage/EditMeeting";
import { EditProcess } from "./pages/EditPage/EditProcess";

function App() {
  return (
    <>
      <AuthContextComponent>
        <AuthDisplayContextComponent>
          <InfoContextComponent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro-cliente" element={<CardCustomer />} />
              <Route path="/cadastro-processo/:id" element={<CardProcess />} />
              <Route path="/agendamento/:id" element={<CardMeeting />} />
              <Route path="/detalhe/:id" element={<DetailPage />} />
              <Route path="/editando-cliente/:id" element={<EditCustomer />} />
              <Route path="/editando-processo/:id" element={<EditProcess />} />
              <Route path="/editando-reuniao/:id" element={<EditMeeting />} />
              <Route path="/profile" element={<ProtectedRoute Component={Profile} />} />
            </Routes>
          </InfoContextComponent>
        </AuthDisplayContextComponent>
      </AuthContextComponent>
    </>
  );
}

export default App;
