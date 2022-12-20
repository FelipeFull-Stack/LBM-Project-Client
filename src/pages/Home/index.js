import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { authDisplayContext } from "../../context/authDisplayContext";
import { useNavigate } from "react-router-dom";
import logoCourtHearing from "../../images/logo_transparent_background.png"
import { CardDisplay } from "../../components/Cards/CardDisplay";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/Stack';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { DropdownItem } from "reactstrap";

function Home() {
    const { loggedInUser, setLoggedInUser, loadingContext } = useContext(AuthContext);
    const { setDisplaySelect } = useContext(authDisplayContext);
    const navigate = useNavigate();

    function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate("/login");
    }

    return (
        <>
            {loadingContext ?
                <>
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>
                :
                loggedInUser ?
                    <>
                        <body style={{
                            position: "fixed", top: "0", left: "0", width: "100vw"
                        }}>
                            <Navbar bg="light" variant="light" style={{ display: "flex", alignItems: "center" }}>
                                <div className="w-25  m-1">
                                    <img src={logoCourtHearing} alt="Logo Court Hearing" className="m-2" style={{ width: "225px" }} />
                                </div>
                                <Container className="w-75 m-1" style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Button onClick={() => { navigate("/cadastro-cliente") }} variant="primary outline-primary" className="p-2 rounded m-2">
                                        Cadastro
                                    </Button>
                                    <Nav className="w-auto border border-secondary rounded p-2">
                                        <div className="border-right border-secondary">
                                            <Nav.Link href="/home">Home</Nav.Link>
                                            {/* <Nav.Link href="/login">Login</Nav.Link> */}
                                            {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
                                        </div>
                                        <div >
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
                                    <Stack gap={2} className="mx-left align-items-center w-100 border-right border-top">
                                        <ButtonGroup vertical className="w-75">
                                            <DropdownButton
                                                as={ButtonGroup}
                                                title="Clientes"
                                                id="bg-vertical-dropdown-1"
                                                variant="dark outline-secondary"
                                                className="p-2 rounded my-1 mt-3"
                                            >
                                                <Dropdown.Item onClick={() => { setDisplaySelect({ selected: "customer" }) }}>Consultar</Dropdown.Item>
                                                <Dropdown.Item >Editar</Dropdown.Item>
                                                <Dropdown.Item>Aniversário</Dropdown.Item>

                                            </DropdownButton>

                                            <DropdownButton
                                                as={ButtonGroup}
                                                title="Processos"
                                                id="bg-vertical-dropdown-2"
                                                variant="dark outline-secondary"
                                                className="p-2 rounded my-1"
                                            >
                                                <Dropdown.Item onClick={() => { setDisplaySelect({ selected: "process" }) }}>Consultar</Dropdown.Item>
                                                <Dropdown.Item>Editar</Dropdown.Item>
                                            </DropdownButton>

                                            <DropdownButton
                                                as={ButtonGroup}
                                                title="Reuniões"
                                                id="bg-vertical-dropdown-3"
                                                variant="dark outline-secondary"
                                                className="p-2 rounded my-1"
                                            >
                                                <Dropdown.Item onClick={() => { setDisplaySelect({ selected: "meeting" }) }}>Consultar</Dropdown.Item>
                                                <Dropdown.Item>Editar</Dropdown.Item>
                                            </DropdownButton>

                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1" disabled>
                                                Extra
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1" disabled>
                                                Extra
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1" disabled>
                                                Extra
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1" disabled>
                                                Extra
                                            </Button>
                                            <Button variant="dark outline-secondary" className="p-2 rounded my-1" disabled>
                                                Extra
                                            </Button>
                                        </ButtonGroup>
                                    </Stack>
                                </div>

                                <div className="d-block flex-row border p-1 " style={{
                                    width: "75vw",
                                    height: "78.5vh",
                                    overflow: "scroll",
                                    overflowX: "hidden",
                                    overflowY: "auto",
                                    backgroundColor: "rgb(223,229,231)"

                                }}>
                                    <Stack gap={2} className="mx-right w-100">
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

// <Button
//     variant="dark outline-secondary"
//     className="p-2 rounded my-1"
//     onClick={() => { setDisplaySelect({ selected: "process" }) }}
// >
//     Processos
// </Button>