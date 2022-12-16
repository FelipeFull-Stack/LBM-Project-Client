import { api } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { infoContext } from "../../context/infoContext";
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/authContext";
// import { CardDisplayCustomer } from "../DisplayCards/CardDisplayCustomer";
// import { CardDisplayProcess } from "../DisplayCards/CardDisplayProcess";
// import { CardDisplayMeeting } from "../DisplayCards/CardDisplayMeeting";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
// import Stack from 'react-bootstrap/Stack';

function DetailPage() {
    const params = useParams();
    const navigate = useNavigate();
    const { objectId } = useContext(infoContext);
    const [customerContents, setCustomerContents] = useState({
        name: "",
        email: "",
        cpf: "",
        age: "",
        phone: "",
        advogado: {},
        process: {},
        meeting: {}
    });
    const [processContents, setProcessContents] = useState({
        numProcess: "",
        type: "",
        value: "",
        etapa: "",
        comarca: "",
        advogado: {},
        customer: {},
        meeting: {}
    });
    const [meetingContents, setMeetingContents] = useState({
        date: "",
        time: "",
        type: "",
        advogado: {},
        customer: {},
        process: {}
    });

    useEffect(() => {
        async function fetchContents() {
            try {
                if (objectId.type === "customer") {
                    const responseCustomer = await api.get(`/customer/${objectId.idSelected}`);
                    setCustomerContents(responseCustomer.data);
                }
                if (objectId.type === "process") {
                    const responseProcess = await api.get(`/process/${objectId.idSelected}`);
                    setProcessContents(responseProcess.data);
                }
                if (objectId.type === "meeting") {
                    const responseMeeting = await api.get(`/meeting/${objectId.idSelected}`);
                    setMeetingContents(responseMeeting.data);
                }
            } catch (err) {
                console.log(`Erro no Front-end - CardDisplay : ${err}`);
            }
        }
        fetchContents();
    }, []);

    async function handleDeleteCustomer() {
        try {
            await api.delete(`/customer/${params.id}`);
            navigate("/home");
        } catch (err) {
            console.log(`Erro em handleDeleteCustomer - Front-End : ${err}`);
        }
    }
    async function handleDeleteProcess() {
        try {
            await api.delete(`/process/${params.id}`);
            navigate("/home");
        } catch (err) {
            console.log(`Erro em handleDeleteProcess - Front-End : ${err}`);
        }
    }
    async function handleDeleteMeeting() {
        try {
            await api.delete(`/meeting/${params.id}`);
            navigate("/home");
        } catch (err) {
            console.log(`Erro em handleDeleteMeeting - Front-End : ${err}`);
        }
    }

    console.log("CustomerContents", customerContents)
    return (
        <>
            {objectId.type === "customer" ? //é um cliente?
                customerContents === {} ?
                    <h1>Carregando</h1>
                    :
                    <div className="bg-secondary" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", height: "100vh" }}>
                        <MDBCard className='text-center'>
                            <MDBCardBody style={{ width: "75vw", height: "75vh" }}>
                                <MDBCardTitle className="m-4">Cliente</MDBCardTitle>
                                <MDBCardText className="m-5" style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center" }}>
                                    <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>CPF: </p><p style={{fontWeight: "500"}}>{customerContents.cpf}</p></div>
                                    <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Idade: </p><p style={{fontWeight: "500"}}>{customerContents.age} anos</p></div>
                                    <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>E-mail: </p><p style={{fontWeight: "500"}}>{customerContents.email}</p></div>
                                    <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Número de Contato: </p><p style={{fontWeight: "500"}}>{customerContents.phone}</p></div>
                                    <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Advogado Principal: </p><p style={{fontWeight: "500"}}>{customerContents.advogado.name}</p></div>
                                    <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Nº do Processo: </p><p style={{fontWeight: "500"}}>{customerContents.process.numProcess}</p></div>
                                    <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Reunião marcada para: </p><p style={{fontWeight: "500"}}>{customerContents.meeting.date}</p></div>
                                </MDBCardText>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                    <Button variant="outline-secondary" style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</Button>
                                    <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate(`/editando-cliente/${params.id}`) }}>Editar</Button>
                                    <Button variant="outline-danger" style={{ width: "10vw" }} onClick={handleDeleteCustomer}>Deletar</Button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                : //se não for cliente
                objectId.type === "process" ? //é um processo?
                    processContents === {} ?
                        <h1>Carregando</h1>
                        :
                        <div className="bg-secondary" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", height: "100vh" }}>
                            <MDBCard className='text-center'>
                                <MDBCardBody style={{ width: "75vw", height: "75vh" }}>
                                    <MDBCardTitle className="m-3">Visualizando o Processo</MDBCardTitle>
                                    <MDBCardText className="m-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center" }}>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Nº do processo: </p><p style={{fontWeight: "500"}}>{processContents.numProcess}</p></div>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Tipo do process: </p><p style={{fontWeight: "500"}}>{processContents.type}</p></div>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Valor: </p><p style={{fontWeight: "500"}}>R${processContents.value},00</p></div>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Etapa atual: </p><p style={{fontWeight: "500"}}>{processContents.etapa}</p></div>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Comarca: </p><p style={{fontWeight: "500"}}>{processContents.comarca}</p></div>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Advogado do Processo: </p><p style={{fontWeight: "500"}}>{processContents.advogado.name}</p></div>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Nome do Cliente: </p><p style={{fontWeight: "500"}}>{processContents.customer.name}</p></div>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>CPF do Cliente: </p><p style={{fontWeight: "500"}}>{processContents.customer.name}</p></div>
                                        <div className="border" style={{ width: "45vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Reunião datada para: </p><p style={{fontWeight: "500"}}>{processContents.meeting.date}</p></div>
                                    </MDBCardText>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                        <Button variant="outline-secondary" style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</Button>
                                        <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate(`/editando-processo/${params.id}`) }}>Editar</Button>
                                        <Button variant="outline-danger" style={{ width: "10vw" }} onClick={handleDeleteProcess}>Deletar</Button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    : //se não for processo, deve ser uma reunião
                    meetingContents === {} ?
                        <h1>Carregando</h1>
                        :
                        <div className="bg-secondary" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", height: "100vh" }}>
                            <MDBCard className='text-center'>
                                <MDBCardBody style={{ width: "75vw", height: "75vh" }}>
                                    <MDBCardTitle className="m-4">Reunião</MDBCardTitle>
                                    <MDBCardText className="m-5" style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center" }}>
                                        <div className="border" style={{ width: "42vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Data marcada: </p><p>{meetingContents.date}</p></div>
                                        <div className="border" style={{ width: "42vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Horário combinado:</p> <p>{meetingContents.time} horas</p></div>
                                        <div className="border" style={{ width: "42vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Tema da Reunião:</p> <p>{meetingContents.type}</p></div>
                                        <div className="border" style={{ width: "42vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Advogado:</p> <p>{meetingContents.advogado.name}</p></div>
                                        <div className="border" style={{ width: "42vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Cliente:</p> <p>{meetingContents.customer.name}</p></div>
                                        <div className="border" style={{ width: "42vw", height: "5vh", display: "flex", justifyContent: "space-between" }}><p>Nº do Processo:</p> <p>{meetingContents.process.numProcess}</p></div>
                                    </MDBCardText>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                        <Button variant="outline-secondary" style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</Button>
                                        <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate(`/editando-reuniao/${params.id}`) }}>Editar</Button>
                                        <Button variant="outline-danger" style={{ width: "10vw" }} onClick={handleDeleteMeeting}>Deletar</Button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
            }
        </>
    )
}

export { DetailPage }