import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

export function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const { setLoggedInUser } = useContext(AuthContext);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await api.get("/user/profile");
                setUserData(response.data);
            } catch (err) {
                console.log(`Erro no profile FrontEnd: ${err}`);
                if (err.response.status === 401) {
                    localStorage.removeItem("loggedInUser");
                    navigate("/");
                }
            }
        }
        fetchUser();
    }, []);

    function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate("/");
    }

    return (
        <>
            <h1>Nome: {userData.name}</h1>
            <p>Este é seu perfil</p>
            <button onClick={handleLogOut}>Log-out</button>
        </>
    )
}