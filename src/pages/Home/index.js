import { useContext, setTimout, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { authDisplayContext } from "../../context/authDisplayContext";
import { useNavigate } from "react-router-dom";
import logoCourtHearing from "../../images/logo-court-hearing-lbm.png"
import { CardDisplay } from "../../components/Cards/CardDisplay";

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
    const { setDisplaySelect } = useContext(authDisplayContext);
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
                        <div class="text-center" style={{ textAlign: "center" }}>
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
                            <Navbar bg="dark" variant="dark" className="border d-flex" style={{ height: "125px" }}>
                                <div className="w-25  m-1">
                                    <img src={logoCourtHearing} alt="Logo Court Hearing" className="m-2" style={{ width: "225px" }} />
                                </div>
                                <Container className="w-50 d-flex  " style={{ alignItems: "end" }}>
                                    <Nav className=" d-flex container justify-content-end w-50" style={{ alignItems: "end" }}>
                                        <div>
                                            <Nav.Link href="/home">Home</Nav.Link>
                                            {/* <Nav.Link href="/login">Login</Nav.Link> */}
                                            {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
                                        </div>
                                        <div>
                                            <NavDropdown title="Menu" id="navbarScrollingDropdown">
                                                <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#" onClick={handleLogOut}>
                                                    Log-out
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </div>
                                    </Nav>
                                </Container>
                            </Navbar>

                            <div style={{ height: "90vh" }} className="d-flex">
                                <div className="d-flex w-25 h-100 bg-secondary">
                                    <Stack gap={2} className="mx-left align-items-center w-100 border">
                                        <ButtonGroup vertical className="w-75">
                                            <Button
                                                variant="dark outline-secondary"
                                                className="p-2 rounded my-1 mt-3"
                                                onClick={() => { setDisplaySelect({ selected: "customer" }) }}
                                            >
                                                Clientes
                                            </Button>
                                            <Button
                                                variant="dark outline-secondary"
                                                className="p-2 rounded my-1"
                                                onClick={() => { setDisplaySelect({ selected: "process" }) }}
                                            >
                                                Processos
                                            </Button>
                                            <Button
                                                variant="dark outline-secondary"
                                                className="p-2 rounded my-1"
                                                onClick={() => { setDisplaySelect({ selected: "meeting" }) }}
                                            >
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

                                <div className="d-flex h-100 bg-secondary border" style={{ width: "75vw" }}>
                                    <Stack gap={2} className="mx-right align-items- w-100">
                                        <div>
                                            <CardDisplay />
                                        </div>
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
                                <Modal.Header>
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