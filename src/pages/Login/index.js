import { useContext, useState } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const { loggedInUser, setLoggendInUser } = useContext(AuthContext);

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await api.post("/user/login", form);
            setLoggendInUser(res.data);
            localStorage.setItem("loggedInUser", JSON.stringify(res.data));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form>
                <div>
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
                            required
                        />
                    </div>
                    <div>
                        <button onClick={() => { handleSubmit() }}>Entrar</button>
                    </div>
                </div>
            </form>

            <button onClick={() => { navigate("/signup") }}>Cadastre-se</button>
        </>
    )
}

export { Login }