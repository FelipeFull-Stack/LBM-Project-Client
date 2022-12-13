import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function HomeLayout() {

    const [click, setClick] = useState({
        
    });
    
    const navigate = useNavigate();
    const { setLoggedInUser } = useContext(AuthContext);

    function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate("/login");
    }

    return (
        <>
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
                            <Dropdown.Item >Novo</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            as={ButtonGroup}
                            title="Processos"
                            id="bg-vertical-dropdown-2"
                        >
                            <Dropdown.Item eventKey="1">Novo</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            as={ButtonGroup}
                            title="Reuniões"
                            id="bg-vertical-dropdown-3"
                        >
                            <Dropdown.Item eventKey="1">Novo</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>

                </aside>
                <content>

                </content>
            </body>
        </>
    );
}

export { HomeLayout }