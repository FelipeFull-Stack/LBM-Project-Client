import { useState, useContext } from "react";
import { api } from "../../api/api";
import { useEffect } from "react";
import { AuthContext } from "../../context/authContext";

function Profile() {
    const [userData, setUserData] = useState({});
    const { loggedInUser } = useContext(AuthContext);

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
                    localStorage.removeItem("loggedInUser")
                }
            }
        }
        fetchUser();
    }, []);

    return (
        <>
            {userData !== {} ? <h1>{userData.name}</h1> : <h1>Faça o Login</h1>}
        </>
    )
}

export { Profile }