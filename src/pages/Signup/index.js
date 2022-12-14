import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import logoLBM from "../../images/logo-lbm-semi-extenso.png"

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Signup() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await api.post("/user/signup", form);
            navigate("/login");
        } catch (err) {
            console.log(`Erro no signup FrontEnd: ${err}`);
        }
    }

    return (
        <>
            <form className="container text-center">
                <Stack gap={2} className="mx-auto p-2 w-50 mt-5 border">
                    <div>
                        <img src={logoLBM} alt="Logo LBM Advogacia" className="w-50" />
                    </div>
                    <div className="align-items-center">
                        <label
                            htmlFor="input-name"
                            className="form-label"
                        >Nome: </label>
                        <input
                            id="input-name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Digite seu nome ..."
                            required
                            className="form-control"
                        />
                    </div>

                    <div className="align-items-center">
                        <label
                            htmlFor="input-email"
                            className="form-label"
                        >E-mail: </label>
                        <input
                            id="input-email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Ex: adgovado@gmail.com"
                            required
                            className="form-control"
                        />
                    </div>

                    <div className="align-items-center">
                        <label
                            htmlFor="input-password"
                            className="form-label"
                        >Password: </label>
                        <input
                            id="input-password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Ex: Z@abc123"
                            // match="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$])[a-zA-Z0-9@#$]{8,24}$"
                            required
                            className="form-control"
                        />
                    </div>
                    <Button variant="outline-primary" onClick={handleSubmit}>Criar Cadastro</Button>
                    <Button variant="outline-secondary" onClick={() => { navigate("/login") }}>Cancelar</Button>
                </Stack>
            </form>
        </>
    )

}

export { Signup };