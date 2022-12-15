import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
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
    MDBCardHeader,
    MDBTabs,
    MDBTabsItem,
    MDBBtn,
    MDBTabsLink
} from 'mdb-react-ui-kit';
// import Button from 'react-bootstrap/Button';
// import Stack from 'react-bootstrap/Stack';

function DetailPage() {

    const navigate = useNavigate();
    const { objectId } = useContext(infoContext);
    const [customerContents, setCustomerContents] = useState({
        name: "",
        email: "",
        cpf: "",
        age: "",
        phone: "",
        advogado: {},
        processes: [],
        meetings: [],
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
    const [meetingContents, setMeetingContents] = useState({});




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

    function handleDelete() {

    }

    console.log("CustomerContents", customerContents)
    return (
        <>
            {objectId.type === "customer" ? //é um cliente?
                customerContents === {} ?
                    <h1>Carregando</h1>
                    :
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
                            <MDBCardTitle>{customerContents.name}</MDBCardTitle>
                            <MDBCardText>
                                <div>CPF: {customerContents.cpf}</div>
                                <div>Idade: {customerContents.age} anos</div>
                                <div>E-mail: {customerContents.email}</div>
                                <div>Número de Contato: {customerContents.phone}</div>
                                <div>Advogado Principal: {customerContents.advogado.name}</div>
                                <div>
                                    {customerContents.processes.map((currentElement) => {
                                        let stringP = currentElement.numProcess;
                                        stringP = stringP.toString();
                                        stringP = stringP.split("");
                                        const NumProcessStyle = `${stringP[0]}${stringP[1]}${stringP[2]}${stringP[3]}${stringP[4]}${stringP[5]}${stringP[6]}.${stringP[7]}${stringP[8]}.${stringP[9]}${stringP[10]}${stringP[11]}${stringP[12]}.${stringP[13]}.${stringP[14]}${stringP[15]}.${stringP[16]}${stringP[17]}${stringP[18]}${stringP[19]}`;

                                        return (
                                            <article><p>Nº do Processo: {NumProcessStyle}</p></article>
                                        )
                                    })}
                                </div>
                                <div>
                                    {customerContents.meetings.map((currentElement) => {
                                        let stringData = "";
                                        for (let i = 0; i < 10; i++) {
                                            stringData += currentElement.date[i];
                                        }
                                        return (
                                            <article><p>Reunião marcada para: {stringData}</p></article>
                                        )
                                    })}
                                </div>
                            </MDBCardText>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                <MDBBtn style={{ width: "10vw" }}>Limpar</MDBBtn>
                                <MDBBtn style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                : //se não for cliente
                objectId.type === "process" ? //é um processo?
                    processContents === {} ?
                        <h1>Carregando</h1>
                        :
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
                                <MDBCardTitle>Processo</MDBCardTitle>
                                <MDBCardText>
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
                                    <MDBBtn style={{ width: "10vw" }}>Limpar</MDBBtn>
                                    <MDBBtn style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    : //se não for processo, deve ser uma reunião
                    meetingContents === {} ?
                        <h1>Carregando</h1>
                        :
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
                                <MDBCardTitle>Reunião</MDBCardTitle>

                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                    <MDBBtn style={{ width: "10vw" }}>Limpar</MDBBtn>
                                    <MDBBtn style={{ width: "10vw" }} onClick={() => { navigate("/home") }}>Voltar</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
            }
        </>
    )
}

export { DetailPage }