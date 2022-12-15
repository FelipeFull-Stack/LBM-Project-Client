import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import logoLBMextends from "../../images/logo-lbm-extenso.png";

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';



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
            <form className="bg-secondary">
                <div className="container p-2 text-center" style={{height: "100vh", width: "100vw"}}>
                    <Stack gap={2} className="mx-auto p-2 w-50 mt-5 border rounded bg-white">
                        <div>
                            <img src={logoLBMextends} alt="Logo LBM Advogacia" className="w-75" />
                        </div>
                        <div className="align-items-center">
                            <label htmlFor="input-email" className="form-label">E-mail: </label>
                            <input
                                id="input-email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Ex: adgovado@gmail.com"
                                className="form-control"
                            />
                        </div>
                        <div className="align-items-center">
                            <label htmlFor="input-password" className="form-label">Password: </label>
                            <input
                                id="input-password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        <Button variant="outline-dark" onClick={handleSubmit} className="w-50 align-items-center">Conectar</Button>
                        <Button variant="outline-dark" onClick={() => { navigate("/signup") }} className="w-50">Fazer Cadastro</Button>
                    </Stack>
                </div>
            </form>

            {/* <button onClick={() => { navigate("/signup") }}>Cadastre-se</button> */}
        </>
    )
}
