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

    let stringP = numProcess;
    stringP = stringP.toString();
    stringP = stringP.split("");
    const NumProcessStyle = `${stringP[0]}${stringP[1]}${stringP[2]}${stringP[3]}${stringP[4]}${stringP[5]}${stringP[6]}.${stringP[7]}${stringP[8]}.${stringP[9]}${stringP[10]}${stringP[11]}${stringP[12]}.${stringP[13]}.${stringP[14]}${stringP[15]}.${stringP[16]}${stringP[17]}${stringP[18]}${stringP[19]}`;

    let stringType = "";

    if (type === "CONHECIMENTO") {
        stringType = "Conhecimento";
    }
    if (type === "CAUTELAR") {
        stringType = "Cautelar";
    }
    if (type === "EXECUCAO") {
        stringType = "Execução";
    }

    const processValue = `R$: ${value},00`;

    let stringEtapa = "";

    if (etapa === "PETICAO INICIAL") {
        stringEtapa = "Petição Inicial";
    }
    if (etapa === "CITACAO") {
        stringEtapa = "Citação";
    }
    if (etapa === "REPLICA") {
        stringEtapa = "Réplica";
    }
    if (etapa === "FASE PROBATORIA") {
        stringEtapa = "Fase Probatória";
    }
    if (etapa === "SENTENCA") {
        stringEtapa = "Sentença";
    }
    if (etapa === "RECURSOS") {
        stringEtapa = "Recursos";
    }
    if (etapa === "CUMPRIMENTO DA SENTENCA") {
        stringEtapa = "Cumprimento da Sentença";
    }



    return (
        <MDBRow >
            <MDBCol sm='6'>
                <MDBCard style={{ width: "73vw", height: "60px" }}>
                    <MDBCardBody>
                        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                        {/* <MDBCardTitle>{name}</MDBCardTitle> */}
                        <MDBCardText style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "baseline" }}>
                            <input type="radio" />
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "240px" }}>{NumProcessStyle}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "80px" }}>{stringType}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "150px" }}>{processValue}</div>
                            <div style={{ fontSize: "16px", fontWeight: "700", width: "250px" }}>{stringEtapa}</div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export { CardDisplayProcess }