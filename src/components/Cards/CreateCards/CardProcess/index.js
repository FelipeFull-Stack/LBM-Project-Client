import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";

function CardProcess() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        cpf: "",
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
            cpf: "",
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
            await api.post("/process", form)
            navigate("/home");
        } catch (err) {
            console.log(`Erro no Front-end em CardProcess: ${err}`);
        }
    }

    return (
        <>
            <form>
                <Card className="text-center">
                    <Card.Header>Cadastro do Processo</Card.Header>
                    <Card.Body>
                        <div>
                            <label htmlFor="input-cpf"></label>
                            <input
                                id="input-cpf"
                            />
                        </div>
                        <div>
                            <label htmlFor="input-numProcess">Nº do Processo: </label>
                            <input
                                id="input-numProcess"
                                type="number"
                                name="numProcess"
                                value={form.numProcess}
                                onChange={handleChange}
                                required
                                placeholder="_______.__.____._.__.____"
                                minLength="20"
                                maxLength="20"
                            />
                        </div>
                        <div>
                            <select
                                name="type"
                            >
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
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="input-etapa">Etapa: </label>
                            <select
                                name="etapa"
                            >
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

export { CardProcess }