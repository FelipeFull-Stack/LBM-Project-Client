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
            window.location = ("/home");
        } catch (err) {
            console.log(`Erro em handleDeleteCustomer - Front-End : ${err}`);
        }
    }
    async function handleDeleteProcess() {
        try {
            await api.delete(`/process/${params.id}`);
            window.location = ("/home");
        } catch (err) {
            console.log(`Erro em handleDeleteProcess - Front-End : ${err}`);
        }
    }
    async function handleDeleteMeeting() {
        try {
            await api.delete(`/meeting/${params.id}`);
            window.location = ("/home");
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
                                <MDBCardText className="m-5">
                                    <div>CPF: {customerContents.cpf}</div>
                                    <div>Idade: {customerContents.age} anos</div>
                                    <div>E-mail: {customerContents.email}</div>
                                    <div>Número de Contato: {customerContents.phone}</div>
                                    <div>Advogado Principal: {customerContents.advogado.name}</div>
                                    <div>Nº do Processo: {customerContents.process.numProcess}</div>
                                    <div>Reunião marcada para: {customerContents.meeting.date}</div>
                                </MDBCardText>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                    <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</Button>
                                    <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate(`/editando-cliente/${params.id}`) }}>Editar</Button>
                                    <Button variant="outline-dark" style={{ width: "10vw" }} onClick={handleDeleteCustomer}>Deletar</Button>
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
                                    <MDBCardTitle className="m-3">Processo</MDBCardTitle>
                                    <MDBCardText className="m-4">
                                        <div>Nº do processo: {processContents.numProcess}</div>
                                        <div>Tipo do process: {processContents.type}</div>
                                        <div>Valor: R${processContents.value},00</div>
                                        <div>Etapa atual: {processContents.etapa}</div>
                                        <div>Comarca: {processContents.comarca}</div>
                                        <div>Advogado do Processo: {processContents.advogado.name}</div>
                                        <div>Nome do Cliente: {processContents.customer.name}</div>
                                        <div>CPF do Cliente: {processContents.customer.cpf}</div>
                                        <div>Reunião datada para: {processContents.meeting.date}</div>
                                    </MDBCardText>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                        <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</Button>
                                        <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate(`/editando-processo/${params.id}`) }}>Editar</Button>
                                        <Button variant="outline-dark" style={{ width: "10vw" }} onClick={handleDeleteProcess}>Deletar</Button>
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
                                    <MDBCardText className="m-5">
                                        <div>Data marcada: {meetingContents.date}</div>
                                        <div>Horário combinado: {meetingContents.time}</div>
                                        <div>Tema da Reunião: {meetingContents.type}</div>
                                        <div>Advogado: {meetingContents.advogado.name}</div>
                                        <div>Cliente: {meetingContents.customer.name}</div>
                                        <div>Nº do Processo: {meetingContents.process.numProcess}</div>
                                    </MDBCardText>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                        <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</Button>
                                        <Button variant="outline-dark" style={{ width: "10vw" }} onClick={() => { navigate(`/editando-reuniao/${params.id}`) }}>Editar</Button>
                                        <Button variant="outline-dark" style={{ width: "10vw" }} onClick={handleDeleteMeeting}>Deletar</Button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
            }
        </>
    )
}

export { DetailPage }