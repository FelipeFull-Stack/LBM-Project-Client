import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBTabs,
    MDBTabsItem,
    MDBBtn,
    MDBTabsLink
} from 'mdb-react-ui-kit';

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
            <MDBCard className='text-center'>
                <MDBCardHeader>
                    <MDBTabs pills className='card-header-tabs'>
                        <MDBTabsItem style={{ width: "15vw" }}>
                            <MDBTabsLink active className="text-bg-primary">
                                Visualizar
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem style={{ width: "15vw" }}>
                            <MDBTabsLink className="text-bg-warning">
                                Editar
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem style={{ width: "15vw" }}>
                            <MDBTabsLink className="text-bg-danger">
                                Deletar
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Seu Perfil</MDBCardTitle>
                    <MDBCardText>
                        <div>Nome: {userData.name}</div>
                        <div>email: {userData.email}</div>
                        <div>Quantidade de Processos: {userData.processes.length}</div>
                        <div>Quantidade de Clientes: {userData.custumers.length}</div>
                        <div>Quantidade de Reuniões Marcadas: {userData.meetings.length}</div>
                    </MDBCardText>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                        <MDBBtn style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</MDBBtn>
                        <MDBBtn style={{ width: "10vw" }} onClick={handleLogOut}>Logout</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </>
    )
}
// {/* <h1>Nome: {userData.name}</h1>
// <p>Este é seu perfil</p>

// <button onClick={handleLogOut}>Log-out</button>
// <button onClick={() => { navigate("/") }}>Voltar</button> */}