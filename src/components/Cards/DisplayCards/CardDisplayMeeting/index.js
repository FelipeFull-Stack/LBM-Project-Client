import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { infoContext } from "../../../../context/infoContext"

function CardDisplayMeeting(props) {
    const { setObjectId } = useContext(infoContext);
    const { date, time, type, id } = props;
    const navigate = useNavigate();

    let stringType = "";
    if (type === "CONCILIACAO OU MEDIACAO") {
        stringType = "Conciliação ou Mediação";
    }
    if (type === "INSTRUCAO E JULGAMENTO") {
        stringType = "Instrução e Julgamento";
    }
    if (type === "JUSTIFICACAO") {
        stringType = "Justificação";
    }

    let stringData = "";
    for (let i = 0; i < 10; i++) {
        stringData += date[i];
    }

    return (
        <MDBRow >
            <MDBCol sm='6'>
                <MDBCard style={{ width: "73vw", height: "60px" }}>
                    <MDBCardBody>
                        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                        {/* <MDBCardTitle>{name}</MDBCardTitle> */}
                        <MDBCardText style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", height: "20px" }}>
                            <button
                                className="btn btn-outline-success rounded border"
                                stype={{ width: "5px", height: "5px" }}
                                onClick={() => {
                                    setObjectId({idSelected: id})
                                    navigate("/agendamento")
                                }}
                            ></button>
                            <div style={{ fontSize: "18px", fontWeight: "700", width: "30%" }}>{stringData}</div>
                            <div style={{ fontSize: "18px", fontWeight: "700", width: "17.5%" }}>{time}</div>
                            <div style={{ fontSize: "18px", fontWeight: "700", width: "35%" }}>{stringType}</div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export { CardDisplayMeeting }