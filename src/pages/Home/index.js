import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { HomeLayout } from "../../components/HomeLayout";

function Home() {
    const { loggedInUser, loadingContext } = useContext(AuthContext);
    const navigate = useNavigate();



    return (
        <>
            {loadingContext ?
                <h1>Carregando</h1>
                :
                loggedInUser ?
                    <>
                        <HomeLayout />
                    </>
                    /* <div>
                        <h1>Ir para Perfil</h1>
                        <button onClick={() => { navigate("/profile") }} >Perfil</button>
                    </div> */
                    :
                    <>
                        <h1> Faça o login </h1>
                        <button onClick={() => { navigate("/login") }}>Login</button>
                    </>
            }
        </>
    );
}

export { Home }

/* <div>
    <h1>Bem vindo</h1>
    <button onClick={() => { navigate("/login") }}>Faça o Login</button>
    <button onClick={() => { navigate("/signup") }}>Faça o Cadastro</button>
</div> */