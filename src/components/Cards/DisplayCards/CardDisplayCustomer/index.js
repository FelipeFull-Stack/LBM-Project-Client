import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

function CardDisplayCustomer(props) {
    const { cpf, age, name, email, phone } = props;

    return (


        <MDBRow >
            <MDBCol sm='6'>
                <MDBCard style={{ width: "73vw", height: "60px" }}>
                    <MDBCardBody>
                        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                        {/* <MDBCardTitle>{name}</MDBCardTitle> */}
                        <MDBCardText style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "baseline" }}>
                            <input type="radio" />
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "150px", border: "solid" }}>{cpf}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "120px" }}>{name}</div>
                            {/* <div style={{ fontSize: "16px", fontWeight: "700", width: "120px" }}>{age}</div> */}
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "250px" }}>{email}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "120px" }}>{phone}</div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

    );
}

export { CardDisplayCustomer }