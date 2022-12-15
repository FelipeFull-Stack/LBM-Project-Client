import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { api } from "../../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

function CardMeeting() {
    const params = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        date: "",
        time: "",
        type: ""
    });


    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleClear() {
        setForm({
            date: "",
            time: "",
            type: ""
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await api.post(`/meeting/${params.id}`, form)
            navigate("/home");
        } catch (err) {
            console.log(`Erro no Front-end em CardMeeting: ${err}`);
        }
    }

    return (
        <>
            <form>
                <Card className="text-center">
                    <Card.Header>Agendamento</Card.Header>
                    <Card.Body>

                        <div>
                            <label htmlFor="input-date">Data a ser marcada: </label>
                            <input
                                id="input-date"
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Horário: </label>
                            <select
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                            >
                                <option>Selecione um Horário</option>
                                <option value="0">00:00</option>
                                <option value="30">00:30</option>
                                <option value="60">01:00</option>
                                <option value="90">01:30</option>
                                <option value="120">02:00</option>
                                <option value="150">02:30</option>
                                <option value="180">03:00</option>
                                <option value="210">03:30</option>
                                <option value="240">04:00</option>
                                <option value="270">04:30</option>
                                <option value="300">05:00</option>
                                <option value="330">05:30</option>
                                <option value="360">06:00</option>
                                <option value="390">06:30</option>
                                <option value="420">07:00</option>
                                <option value="450">07:30</option>
                                <option value="480">08:00</option>
                                <option value="510">08:30</option>
                                <option value="540">09:00</option>
                                <option value="570">09:30</option>
                                <option value="600">10:00</option>
                                <option value="630">10:30</option>
                                <option value="660">11:00</option>
                                <option value="690">11:30</option>
                                <option value="720">12:00</option>
                                <option value="750">12:30</option>
                                <option value="780">13:00</option>
                                <option value="810">13:30</option>
                                <option value="840">14:00</option>
                                <option value="870">14:30</option>
                                <option value="900">15:00</option>
                                <option value="930">15:30</option>
                                <option value="960">16:00</option>
                                <option value="990">16:30</option>
                                <option value="1020">17:00</option>
                                <option value="1050">17:30</option>
                                <option value="1080">18:00</option>
                                <option value="1110">18:30</option>
                                <option value="1140">19:00</option>
                                <option value="1170">19:30</option>
                                <option value="1200">20:00</option>
                                <option value="1230">20:30</option>
                                <option value="1260">21:00</option>
                                <option value="1290">21:30</option>
                                <option value="1320">22:00</option>
                                <option value="1350">22:30</option>
                                <option value="1380">23:00</option>
                                <option value="1410">23:30</option>
                            </select>
                        </div>

                        <div>
                            <select
                                name="type"
                                value={form.type}
                                onChange={handleChange}
                            >
                                <option value="CONCILIACAO OU MEDIACAO">Conciliação ou Mediação</option>
                                <option value="INSTRUCAO E JULGAMENTO">Instrução e Julgamento</option>
                                <option value="JUSTIFICACAO">Justificação</option>
                            </select>
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

export { CardMeeting }