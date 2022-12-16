import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

export function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        age: "",
        function: "",
        atuation: "",
        cpf: "",
        meetings: [],
        processes: [],
        custumers: []
    });
    const { setLoggedInUser } = useContext(AuthContext);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await api.get("/user/profile");
                setUserData(response.data);
            } catch (err) {
                console.log(`Erro no profile FrontEnd: ${err}`);
                if (err.response.status === 401) {
                    localStorage.removeItem("loggedInUser");
                    navigate("/login");
                }
            }
        }
        fetchUser();
    }, []);

    function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate("/login");
    }

    return (
        <>
            <div className="bg-secondary" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", height: "100vh" }}>
                <MDBCard className='text-center'>
                    <MDBCardBody style={{ width: "75vw", height: "75vh" }}>
                        <MDBCardTitle className="m-4" style={{ fontSize: "40px" }}>Perfil do Advogado</MDBCardTitle>
                        <MDBCardText className="m-5" style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center" }}>
                            <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Nome: </p><p style={{ fontWeight: "500" }}>{userData.name}</p></div>
                            <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>email: </p><p style={{ fontWeight: "500" }}>{userData.email}</p></div>

                            <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Quantidade de Processos: </p><p style={{ fontWeight: "500" }}>{userData.processes.length}</p></div>
                            <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Quantidade de Clientes: </p><p style={{ fontWeight: "500" }}>{userData.custumers.length}</p></div>
                            <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Quantidade de Reuniões Marcadas: </p><p style={{ fontWeight: "500" }}>{userData.meetings.length}</p></div>
                        </MDBCardText>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                            <Button variant="outline-secondary" style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</Button>
                            {/* <Button variant="outline-dark" style={{ width: "10vw" }}>Editar</Button> */}
                            {/* <Button variant="outline-danger" style={{ width: "10vw" }}>Deletar</Button> */}
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </>
    )
}
// {/* <h1>Nome: {userData.name}</h1>
// <p>Este é seu perfil</p>

// <button onClick={handleLogOut}>Log-out</button>
// <button onClick={() => { navigate("/") }}>Voltar</button> */}