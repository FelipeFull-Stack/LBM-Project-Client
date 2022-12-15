import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { infoContext } from "../../context/infoContext";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
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
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function DetailPage() {

    const navigate = useNavigate();
    const { objectId } = useContext(infoContext);
    const [customerContents, setCustomerContents] = useState([]);
    const [processContents, setProcessContents] = useState([]);
    const [meetingContents, setMeetingContents] = useState([]);




    useEffect(() => {
        async function fetchContents() {
            try {
                const responseCustomer = await api.get("/customer/objectId");
                const responseProcess = await api.get("/process/objectId");
                const responseMeeting = await api.get("/meeting/objectId");
                setCustomerContents(responseCustomer.data);
                setProcessContents(responseProcess.data);
                setMeetingContents(responseMeeting.data);
                // if (displaySelect.selected === "customer") {

                // }
                // if (displaySelect.selected === "process") {

                // }
                // if (displaySelect.selected === "meeting") {
                // }
            } catch (err) {
                console.log(`Erro no Front-end - CardDisplay : ${err}`);
            }
        }
        fetchContents();
    }, []);

    function handleDelete() {

    }


    return (
        <>
            {objectId.type === "customer" ? //é um cliente?
                <MDBCard className='text-center'>
                    <MDBCardHeader>
                        <MDBTabs pills className='card-header-tabs'>
                            <MDBTabsItem>
                                <MDBTabsLink active>
                                    Visualizar
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink>
                                    Editar
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink>
                                    Deletar
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>{customerContents[0].name}</MDBCardTitle>
                        <MDBCardText>
                            <div>{customerContents[0].cpf}</div>
                            <div>{customerContents[0].age}</div>
                            <div>{customerContents[0].email}</div>
                            <div>{customerContents[0].phone}</div>
                            <div>{customerContents[0].advogado}</div>
                            <div>
                                {customerContents[0].processes.map((currentElement) => {
                                    return (<article>currentElement</article>)
                                })}
                            </div>
                            <div>
                                {customerContents[0].meetings.map((currentElement) => {
                                    return (<article>currentElement</article>)
                                })}
                            </div>
                        </MDBCardText>
                        <MDBBtn>Criar</MDBBtn>
                        <MDBBtn>Limpar</MDBBtn>
                        <MDBBtn>Voltar</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                : //se não for cliente
                objectId === "process" ? //é um processo?
                    <MDBCard className='text-center'>
                        <MDBCardHeader>
                            <MDBTabs pills className='card-header-tabs'>
                                <MDBTabsItem>
                                    <MDBTabsLink active>
                                        Visualizar
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink>
                                        Editar
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink>
                                        Deletar
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>Processo</MDBCardTitle>
                            <MDBCardText>
                                <div>Nº do processo: {processContents[0].numProcess}</div>
                                <div>Tipo do process: {processContents[0].type}</div>
                                <div>Valor: {processContents[0].value}</div>
                                <div>Etapa atual: {processContents[0].etapa}</div>
                                <div>Comarca: {processContents[0].comarca}</div>
                                <div>Advogado: {processContents[0].advogado}</div>
                                <div>Nome do Cliente: {processContents[0].customer}</div>
                                <div>CPF do Cliente: {processContents[0].cpf}</div>
                                <div>Reunião: {processContents[0].meeting}</div>
                            </MDBCardText>
                            <MDBBtn>Criar</MDBBtn>
                            <MDBBtn>Limpar</MDBBtn>
                            <MDBBtn>Voltar</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    : //se não for processo, deve ser uma reunião
                    <MDBCard className='text-center'>
                        <MDBCardHeader>
                            <MDBTabs pills className='card-header-tabs'>
                                <MDBTabsItem>
                                    <MDBTabsLink active>
                                        Visualizar
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink>
                                        Editar
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={handleDelete}>
                                        Deletar
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>Reunião</MDBCardTitle>
                            <MDBCardText>
                                <div>Data marcada: {meetingContents[0].date}</div>
                                <div>Horário: {meetingContents[0].time}</div>
                                <div>Tema: {meetingContents[0].type}</div>
                                <div>Advogado: {meetingContents[0].advogado}</div>
                                <div>Cliente: {meetingContents[0].customer}</div> {/*Como eu consigo pegar o nome do Cliente pelo ID?*/}
                                <div>Nº do Processo: {meetingContents[0].process}</div> {/*Como eu consigo pegar o nome do Cliente pelo ID?*/}
                            </MDBCardText>
                            <MDBBtn onClick={() => { navigate("/agendamento") }}>Novo</MDBBtn>
                            <MDBBtn>Limpar</MDBBtn>
                            <MDBBtn>Voltar</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
            }
        </>
    )
}

export { DetailPage }