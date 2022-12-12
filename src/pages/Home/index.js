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
                    <div>
                        <h1>Ir para Perfil</h1>
                        <button onClick={() => { navigate("/profile") }} >Perfil</button>
                    </div>
                    :
                    <div>
                        <h1>Bem vindo</h1>
                        <button onClick={() => { navigate("/login") }}>Faça o Login</button>
                        <button onClick={() => { navigate("/signup") }}>Faça o Cadastro</button>
                    </div>
            }
        </>
    );
}

export { Home }
