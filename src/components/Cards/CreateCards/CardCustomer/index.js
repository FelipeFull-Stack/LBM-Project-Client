import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";

function CardCustomer() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        cpf: "",
        age: "",
        phone: ""
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleClear() {
        setForm({
            name: "",
            email: "",
            cpf: "",
            age: "",
            phone: ""
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await api.post("/customer", form);
            navigate("/cadastro-processo");
        } catch (err) {
            console.log(`Erro no Front-end em CardCustomer: ${err}`);
        }
    }

    return (
        <>
            <form className="m-30">
                <Card className="text-center">
                    <Card.Header>Cadastro do Cliente</Card.Header>
                    <Card.Body>
                        <div>
                            <label htmlFor="input-name">Nome completo: </label>
                            <input
                                id="input-name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="input-email">Email: </label>
                            <input
                                id="input-email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="exemplo@email.com"
                                required
                            />
                        </div>

                        <div>
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
                            />
                        </div>

                        <div>
                            <label htmlFor="input-age">Idade: </label>
                            <input
                                id="input-age"
                                type="number"
                                name="age"
                                value={form.age}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
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

export { CardCustomer }