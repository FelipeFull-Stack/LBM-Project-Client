import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { infoContext } from "../../../../context/infoContext"

function CardDisplayCustomer(props) {
    const { setObjectId } = useContext(infoContext);
    const { cpf, name, email, phone, id } = props;
    const navigate = useNavigate();

    let string = "";
    string = cpf.toString();
    string = string.split("")
    const numberCPFstyle = `${string[0]}${string[1]}${string[2]}.${string[3]}${string[4]}${string[5]}.${string[6]}${string[7]}${string[8]}-${string[9]}${string[10]}`

    let string2 = "";
    string2 = phone.toString();
    string2 = string2.split("");
    const numberPHONEstyle = `(${string2[0]}${string2[1]}) ${string2[2]} ${string2[3]}${string2[4]}${string2[5]}${string2[6]}-${string2[7]}${string2[8]}${string2[9]}${string2[10]}`;

    return (
        <MDBRow>
            <MDBCol sm='6'>
                <MDBCard style={{ width: "73vw", height: "60px" }}>
                    <MDBCardBody>
                        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                        {/* <MDBCardTitle>{name}</MDBCardTitle> */}
                        <MDBCardText style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", height: "20px" }}>
                            {/* <Link to={`/detalhe/${id}`}> */}
                            <button
                                className="btn btn-success btn-outline-success rounded border"
                                onClick={() => {
                                    setObjectId({ idSelected: id, type: "customer" })
                                    navigate(`/detalhe/${id}`)
                                }}
                            ></button>
                            {/* </Link> */}
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "35%" }}>{name}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "20%" }}>{numberCPFstyle}</div>
                            <select className="rounded" style={{ fontSize: "16px", fontWeight: "700", width: "35%", height: "35px" }}>
                                <option style={{ fontSize: "16px", fontWeight: "700" }}> {" "} {email}</option>
                                <option style={{ fontSize: "16px", fontWeight: "700" }}> {" "} {numberPHONEstyle}</option>
                            </select>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

    );
}

export { CardDisplayCustomer }