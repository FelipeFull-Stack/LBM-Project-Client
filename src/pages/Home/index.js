import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { HomeLayout } from "../../components/HomeLayout";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
                    :
                    <>
                        <div
                            className="modal show"
                            style={{ display: 'block', position: 'initial' }}
                        >
                            <Modal.Dialog>
                                <Modal.Header closeButton>
                                    <Modal.Title>Alerta: Usuário não identificado</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Porfavor, certfique-se de fazer o login corretamente</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="primary" onClick={() => { navigate("login") }}>OK</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
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