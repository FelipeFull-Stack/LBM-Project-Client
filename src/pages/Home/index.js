import { useContext, setTimout, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/Stack';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
                <>
                    window.setTimeout(function () {
                        <div class="text-center align-items-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    })
                </>
                :
                loggedInUser ?
                    <>
                        <body>
                            <Navbar bg="dark" variant="dark" >
                                <Container>
                                    <Nav className="me-auto">
                                        <Nav.Link href="/home">Home</Nav.Link>
                                        <Nav.Link href="/login">Login</Nav.Link>
                                        <Nav.Link href="/signup">Signup</Nav.Link>

                                        <NavDropdown title="Menu" id="navbarScrollingDropdown" className="">
                                            <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#" onClick={handleLogOut}>
                                                Log-out
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Navbar>

                            <div style={{ height: "90vh" }} className="d-flex">
                                <div className="d-flex w-25 h-100 bg-secondary">
                                    <Stack gap={2} className="mx-left align-items-center w-100">
                                        <ButtonGroup vertical className="w-75">
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1 mt-3">
                                                Clientes
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1">
                                                Processos
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1">
                                                Reuniões
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1">
                                                Extra
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1">
                                                Extra
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1">
                                                Extra
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1">
                                                Extra
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1">
                                                Extra
                                            </Button>
                                        </ButtonGroup>
                                    </Stack>
                                </div>

                                <div className="d-flex w-74 h-100 bg-secondary">
                                    <Stack gap={2} className="mx-right align-items- w-100">
                                        <h1>oi</h1>
                                    </Stack>
                                </div>
                            </div>
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

                                <Modal.Footer className="mv-center">
                                    <Button variant="primary" onClick={() => { navigate("/login") }}>OK</Button>
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

// <DropdownButton
// as={ButtonGroup}
// title="Clientes"
// id="bg-vertical-dropdown-1"
// >
// <Dropdown.Item onClick={() => { navigate("/cadastro-cliente") }}>Novo</Dropdown.Item>
// </DropdownButton>