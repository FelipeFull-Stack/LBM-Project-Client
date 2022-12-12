import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../api/api";
import Button from 'react-bootstrap/Button';


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
            <form onSubmit={handleSubmit} className="row g-3 needs-validation m-2">
                <div className="col-md-4 m-2">
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

                <div className="col-md-4 m-2">
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

                <div className="col-md-4 m-2">
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
                        // pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$])[a-zA-Z0-9@#$]{8,24}$"
                        required
                        className="form-control"
                    />
                </div>

                {/* <Button
                    onClick={handleSubmit}
                    variant="primary"
                    className="mt-4 m-2"
                >Cadastrar</Button> */}
                <button>Cadastrar</button>
            </form>
            <Link to="/home"><Button
                className="mt-4 m-2"
            >Cancelar</Button></Link>
        </>
    )

}

export { Signup };