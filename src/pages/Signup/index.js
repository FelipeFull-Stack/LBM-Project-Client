import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../api/api";

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
            console.log(err);
        }
    }

    return (
        <>
            <form>
                <div>
                    <label htmlFor="input-name">Nome: </label>
                    <input
                        id="input-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Digite seu nome ..."
                        required
                    />
                </div>

                <div>
                    <label htmlFor="input-email">E-mail: </label>
                    <input
                        id="input-email"
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Ex: adgovado@gmail.com"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="input-password">Password: </label>
                    <input
                        id="input-password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Ex: Z@abc123"
                        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$])[a-zA-Z0-9@#$]{8,24}$"
                        required
                    />
                </div>

                <div>
                    <button onSubmit={handleSubmit}>Cadastrar</button>
                    <Link to={"/signup"}>Cancelar</Link>
                </div>
            </form>
        </>
    )

}

export { Signup };