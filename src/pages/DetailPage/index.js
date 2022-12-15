import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { authDisplayContext } from "../../context/authDisplayContext";
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
    const { displaySelect, setDisplaySelect } = useContext(authDisplayContext);
    const { loadingContext } = useContext(AuthContext);
    const [customerContents, setCustomerContents] = useState([]);
    const [processContents, setProcessContents] = useState([]);
    const [meetingContents, setMeetingContents] = useState([]);



    useEffect(() => {
        async function fetchContents() {
            try {
                const responseCustomer = await api.get("/customer");
                const responseProcess = await api.get("/process");
                const responseMeeting = await api.get("/meeting");
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


    return (
        <>
            <MDBCard className='text-center'>
                <MDBCardHeader>
                    <MDBTabs pills className='card-header-tabs'>
                        <MDBTabsItem>
                            <MDBTabsLink active>
                                Editar
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink>
                                Deletar
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink className='disabled'>
                                Disabled
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                    <MDBCardText>
                        With supporting text below as a natural lead-in to additional content.
                    </MDBCardText>
                    <MDBBtn>Go somewhere</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </>
    )
}

export { DetailPage }