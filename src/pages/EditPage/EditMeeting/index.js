import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { api } from "../../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

function EditMeeting() {
    const params = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        date: "",
        time: "",
        type: ""
    });

    useEffect(() => {
        async function fetchMeeting() {
            try {
                const response = await api.get(`/meeting/${params.id}`);
                setForm(response.data);
            } catch (err) {
                console.log(`Erro em EditMeeting/Front-end : ${err}`);
            }
        }
        fetchMeeting();
    }, [])

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
            delete form._id;
            await api.put(`/meeting/${params.id}`, {
                date: form.date,
                time: form.time,
                type: form.type
            });
            navigate(`/detalhe/${params.id}`);
        } catch (err) {
            console.log(`Erro no EditMeeting/Submit em Front-end : ${err}`);
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
                                <option value="00:00">00:00</option>
                                <option value="00:30">00:30</option>
                                <option value="01:00">01:00</option>
                                <option value="01:30">01:30</option>
                                <option value="02:00">02:00</option>
                                <option value="02:30">02:30</option>
                                <option value="03:00">03:00</option>
                                <option value="03:30">03:30</option>
                                <option value="04:00">04:00</option>
                                <option value="04:30">04:30</option>
                                <option value="05:00">05:00</option>
                                <option value="05:30">05:30</option>
                                <option value="06:00">06:00</option>
                                <option value="06:30">06:30</option>
                                <option value="07:00">07:00</option>
                                <option value="07:30">07:30</option>
                                <option value="08:00">08:00</option>
                                <option value="08:30">08:30</option>
                                <option value="09:00">09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="12:30">12:30</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
                                <option value="14:30">14:30</option>
                                <option value="15:00">15:00</option>
                                <option value="15:30">15:30</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                                <option value="17:30">17:30</option>
                                <option value="18:00">18:00</option>
                                <option value="18:30">18:30</option>
                                <option value="19:00">19:00</option>
                                <option value="19:30">19:30</option>
                                <option value="20:00">20:00</option>
                                <option value="20:30">20:30</option>
                                <option value="21:00">21:00</option>
                                <option value="21:30">21:30</option>
                                <option value="22:00">22:00</option>
                                <option value="22:30">22:30</option>
                                <option value="23:00">23:00</option>
                                <option value="23:30">23:30</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="input-type">Tema: </label>
                            <select
                                id="input-type"
                                name="type"
                                value={form.type}
                                onChange={handleChange}
                            >
                                <option>Selecione o tema</option>
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

export { EditMeeting }