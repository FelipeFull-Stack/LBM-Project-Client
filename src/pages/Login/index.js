import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";


export function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });


    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

    console.log(loggedInUser);

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await api.post("/user/login", form);
            setLoggedInUser(response.data);
            localStorage.setItem("loggedInUser", JSON.stringify(response.data));
            navigate("/home");
        } catch (err) {
            console.log(`Erro no login/handleSubmit FrontEnd: ${err}`);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="input-email">E-mail: </label>
                    <input
                        id="input-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Ex: adgovado@gmail.com"
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
                    />
                </div>
                <div>
                    <button>Entrar</button>
                </div>
            </form>

            {/* <button onClick={() => { navigate("/signup") }}>Cadastre-se</button> */}
        </>
    )
}
