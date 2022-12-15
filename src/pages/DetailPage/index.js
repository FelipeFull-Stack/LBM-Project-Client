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
                        <MDBCardTitle>Cliente</MDBCardTitle>
                        <MDBCardText>
                            Conteúdo do :
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
                                Conteúdo do :
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
                                Conteúdo do :
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