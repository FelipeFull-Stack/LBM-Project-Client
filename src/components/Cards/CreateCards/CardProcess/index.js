import { useState } from "react";
import { api } from "../../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

function CardProcess() {

    const params = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        numProcess: "",
        type: "",
        value: "",
        etapa: "",
        comarca: ""
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleClear() {
        setForm({
            numProcess: "",
            type: "",
            value: "",
            etapa: "",
            comarca: ""
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const responseId = await api.post(`/process/${params.id}`, form)
            navigate(`/agendamento/${responseId.data.customer}`);
        } catch (err) {
            console.log(`Erro no Front-end em CardProcess: ${err}`);
        }
    }

    return (
        <>
            <form>
                <div className="bg-secondary" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", height: "100vh" }}>
                    <MDBCard className='text-center'>
                        <MDBCardBody style={{ width: "75vw", height: "75vh" }}>
                            <MDBCardTitle className="m-4">Cadastro do Cliente</MDBCardTitle>
                            <MDBCardText className="m-5">
                                <div>
                                    <label htmlFor="input-numProcess">Nº do Processo: </label>
                                    <input
                                        id="input-numProcess"
                                        type="text"
                                        name="numProcess"
                                        value={form.numProcess}
                                        onChange={handleChange}
                                        placeholder="_______.__.____._.__.____"
                                        minLength="20"
                                        maxLength="20"
                                        required
                                    />
                                </div>
                                <div>
                                    <select
                                        name="type"
                                        value={form.type}
                                        onChange={handleChange}
                                    >
                                        <option>Escolha o tipo do processo</option>
                                        <option value="CONHECIMENTO">Conhecimento</option>
                                        <option value="CAUTELAR">Cautelar</option>
                                        <option value="EXECUCAO">Execução</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="input-value">Value: </label>
                                    <input
                                        id="input-value"
                                        type="number"
                                        name="value"
                                        value={form.value}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="input-etapa">Etapa: </label>
                                    <select
                                        name="etapa"
                                        value={form.etapa}
                                        onChange={handleChange}
                                    >
                                        <option>Escolha a etapa do processo</option>
                                        <option value="PETICAO INICIAL">Petição Inicial</option>
                                        <option value="CITACAO">Citação</option>
                                        <option value="REPLICA">Réplica</option>
                                        <option value="FASE PROBATORIA">Fase Probatória</option>
                                        <option value="SENTENCA">Sentença</option>
                                        <option value="RECURSOS">Recursos</option>
                                        <option value="CUMPRIMENTO DA SENTENCA">Cumprimento da Sentança</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="input-comarca">Comarca: </label>
                                    <input
                                        id="input-comarca"
                                        type="text"
                                        name="comarca"
                                        value={form.comarca}
                                        onChange={handleChange}
                                    />
                                </div>
                            </MDBCardText>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                <Button variant="outline-dark" onClick={handleSubmit}>Cadastrar</Button>
                                <Button variant="outline-dark" onClick={handleClear}>Limpar</Button>
                                <Button variant="outline-dark" onClick={() => { navigate("/home") }}>Voltar</Button>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </form>
        </>
    )
}

export { CardProcess }