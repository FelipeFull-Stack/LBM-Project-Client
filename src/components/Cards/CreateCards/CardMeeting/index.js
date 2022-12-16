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
            <div className="bg-secondary" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", height: "100vh" }}>
                    <MDBCard className='text-center'>
                        <MDBCardBody style={{ width: "75vw", height: "75vh" }}>
                            <MDBCardTitle className="m-4">Cadastro do Cliente</MDBCardTitle>
                            <MDBCardText className="m-5" style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center" }}>
                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-name">Nome completo: </label>
                                    <input
                                        id="input-name"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "25vw", height: "5vh" }}
                                    />
                                </div>

                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-email">Email: </label>
                                    <input
                                        id="input-email"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="exemplo@email.com"
                                        required
                                        style={{ width: "25vw", height: "5vh" }}
                                    />
                                </div>

                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-cpf">Cpf: </label>
                                    <input
                                        id="input-cpf"
                                        type="number"
                                        name="cpf"
                                        value={form.cpf}
                                        minLength="11"
                                        maxLength="11"
                                        onChange={handleChange}
                                        placeholder="___.___.___-__"
                                        required
                                        style={{ width: "25vw", height: "5vh" }}
                                    />
                                </div>

                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-age">Idade: </label>
                                    <input
                                        id="input-age"
                                        type="number"
                                        name="age"
                                        value={form.age}
                                        onChange={handleChange}
                                        style={{ width: "25vw", height: "5vh" }}
                                    />
                                </div>

                                <div className="border" style={{ width: "42vw", display: "flex", justifyContent: "space-between" }}>
                                    <label htmlFor="input-phone">Telefone: </label>
                                    <input
                                        id="input-phone"
                                        type="number"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        minLength="11"
                                        maxLength="11"
                                        placeholder="(__) _ ____-____"
                                        style={{ width: "25vw", height: "5vh" }}
                                    />
                                </div>
                            </MDBCardText>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                <Button variant="outline-success" onClick={handleSubmit}>Agendar</Button>
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

export { CardMeeting }