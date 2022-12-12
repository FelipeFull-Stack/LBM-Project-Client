import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

function Home() {
    const { loggedInUser, loadingContext } = useContext(AuthContext);
    const navigate = useNavigate();

    

    return (
        <>
            {loadingContext ?
                <h1>Carregando</h1>
                :
                loggedInUser ?
                    <h1>Ir para Perfil {loggedInUser.name}</h1>
                    :
                    navigate("/login")
            }
        </>
    );
}

export { Home }
