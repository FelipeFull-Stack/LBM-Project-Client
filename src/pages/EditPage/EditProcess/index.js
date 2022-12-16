import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { api } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

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
                <Card className="text-center">
                    <Card.Header>Cadastro do Processo</Card.Header>
                    <Card.Body>
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
                        <Button variant="primary" onClick={handleSubmit}>Cadastrar</Button>
                        <Button variant="primary" onClick={handleClear}>Limpar</Button>
                        <Button variant="primary" onClick={() => { navigate("/home") }}>Voltar</Button>
                    </Card.Body>
                </Card>
            </form>
        </>
    )
}

export { EditProcess }