import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Home() {
    const { loggedInUser, loadingContext } = useContext(AuthContext);
    const navigate = useNavigate();
    const { setLoggedInUser } = useContext(AuthContext);

    function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate("/login");
    }

    return (
        <>
            {loadingContext ?
                <h1>Carregando</h1>
                :
                loggedInUser ?
                    <>
                        {/* <HomeLayout /> */}
                        <body>
                            <Navbar bg="dark" variant="dark" className="align-right">
                                <Container>
                                    <Nav className="me-auto">
                                        <Nav.Link href="/home">Home</Nav.Link>
                                        <Nav.Link href="/login">Login</Nav.Link>
                                        <Nav.Link href="/signup">Signup</Nav.Link>
                                        <NavDropdown title="Menu" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#" onClick={handleLogOut}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Navbar>
                            <aside >
                                <ButtonGroup vertical>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        title="Clientes"
                                        id="bg-vertical-dropdown-1"
                                    >
                                        <Dropdown.Item onClick={() => { navigate("/cadastro-cliente") }}>Novo</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        title="Processos"
                                        id="bg-vertical-dropdown-2"
                                    >
                                        <Dropdown.Item onClick={() => { navigate("/cadastro-processo") }}>Novo</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        title="Reuniões"
                                        id="bg-vertical-dropdown-3"
                                    >
                                        <Dropdown.Item onClick={() => { navigate("/agendamento") }}>Novo</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>

                            </aside>
                            <content>

                            </content>
                        </body>
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