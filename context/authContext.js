import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {

    const [loggedInUser, setLogeedInUser] = useState({ token: "", user: {} })

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        const parsedStoredUser = JSON.parse(storedUser || '""');

        if (parsedStoredUser.token) {
            setLogeedInUser(parsedStoredUser);
        } else {
            setLogeedInUser(null);
        }
    }, [])

    return <AuthContext.Provider value={{ loggedInUser, setLogeedInUser }}>
        {props.children}
    </AuthContext.Provider>

}

export { AuthContext, AuthContextComponent }