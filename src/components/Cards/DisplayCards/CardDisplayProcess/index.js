import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

function CardDisplayProcess(props) {
    const { numProcess, type, value, etapa } = props;

    return (
        <MDBRow >
            <MDBCol sm='6'>
                <MDBCard style={{ width: "73vw", height: "60px" }}>
                    <MDBCardBody>
                        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                        {/* <MDBCardTitle>{name}</MDBCardTitle> */}
                        <MDBCardText style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "baseline" }}>
                            <input type="radio" />
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "180px", border: "solid" }}>{numProcess}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "120px" }}>{type}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "100px" }}>{value}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "250px" }}>{etapa}</div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export { CardDisplayProcess }