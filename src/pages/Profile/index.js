import { useState, useContext } from "react";
import { api } from "../../api/api.js";
import { useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [userData, setUserData] = useState({});
    const { loggedInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUser() {
            try {
                if (loggedInUser) {
                    const res = await api.get("/user/profile");
                    setUserData(res.data);
                }
            } catch (err) {
                console.log(err);
                if (err.response.stats === 401) {
                    localStorage.removeItem("loggedInUser");
                    navigate("/");
                }
            }
        }
        fetchUser();
    }, []);

    return (
        <>
            {
                userData !== {} ?
                    <h1>{userData.name}</h1>
                    :
                    <h1>Faça o Login</h1>}
        </>
    )
}

export { Profile }