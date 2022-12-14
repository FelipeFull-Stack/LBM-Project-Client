import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

function CardDisplayMeeting(props) {
    const { date, time, type } = props;

    return (
        <MDBRow >
            <MDBCol sm='6'>
                <MDBCard style={{ width: "73vw", height: "60px" }}>
                    <MDBCardBody>
                        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                        {/* <MDBCardTitle>{name}</MDBCardTitle> */}
                        <MDBCardText style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "baseline" }}>
                            <input type="radio" />
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "300px", border: "solid" }}>{date}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "150px" }}>{time}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "250px" }}>{type}</div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export { CardDisplayMeeting }