import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

function EditProcess() {

    const params = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        numProcess: "",
        type: "",
        value: "",
        etapa: "",
        comarca: ""
    });

    useEffect(() => {
        async function fetchProcess() {
            try {
                const response = await api.get(`/process/${params.id}`);
                setForm(response.data);
            } catch (err) {
                console.log(`Erro no EditProcess.get em Front-end : ${err}`);
            }
        }
        fetchProcess();
    }, [])

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
            await api.put(`/process/${params.id}`, {
                numProcess: form.numProcess,
                type: form.type,
                value: form.value,
                etapa: form.etapa,
                comarca: form.comarca
            })
            navigate(`/detalhe/${params.id}`);
        } catch (err) {
            console.log(`Erro no EditProcess.submit em Front-End: ${err}`);
        }
    }

    return (
        <>
            <form>
                <div className="bg-secondary" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", height: "100vh" }}>
                    <MDBCard className='text-center'>
                        <MDBCardBody style={{ width: "75vw", height: "75vh" }}>
                            <MDBCardTitle className="m-4">Editando o Processo</MDBCardTitle>
                            <MDBCardText className="m-5" style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center" }}>
                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
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
                                        style={{width: "25vw", height: "5vh"}}
                                        required
                                    />
                                </div>
                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-type">Tipo do Processo: </label>
                                    <select
                                        id="input-type"
                                        name="type"
                                        value={form.type}
                                        onChange={handleChange}
                                        style={{width: "25vw", height: "5vh"}}
                                    >
                                        <option>Escolha o tipo do processo</option>
                                        <option value="CONHECIMENTO">Conhecimento</option>
                                        <option value="CAUTELAR">Cautelar</option>
                                        <option value="EXECUCAO">Execução</option>
                                    </select>
                                </div>
                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-value">Value: </label>
                                    <input
                                        id="input-value"
                                        type="number"
                                        name="value"
                                        value={form.value}
                                        onChange={handleChange}
                                        style={{width: "25vw", height: "5vh"}}
                                    />
                                </div>
                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-etapa">Etapa: </label>
                                    <select
                                        name="etapa"
                                        value={form.etapa}
                                        onChange={handleChange}
                                        style={{width: "25vw", height: "5vh"}}
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
                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-comarca">Comarca: </label>
                                    <input
                                        id="input-comarca"
                                        type="text"
                                        name="comarca"
                                        value={form.comarca}
                                        onChange={handleChange}
                                        style={{width: "25vw", height: "5vh"}}
                                    />
                                </div>
                            </MDBCardText>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                <Button variant="outline-success" onClick={handleSubmit}>Salvar</Button>
                                <Button variant="outline-secondary" onClick={handleClear}>Limpar</Button>
                                <Button variant="outline-dark" onClick={() => { navigate("/home") }}>Voltar</Button>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </form>
        </>
    )
}

export { EditProcess }