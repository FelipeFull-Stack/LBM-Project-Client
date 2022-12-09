import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {

    const [loggedInUser, setLogeedInUser] = useState({ token: "", user: {} })
    const [loadingContext, setloadingContext] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        const parsedStoredUser = JSON.parse(storedUser || '""');

        if (parsedStoredUser.token) {
            setLogeedInUser(parsedStoredUser);
            setloadingContext(false);
        } else {
            setLogeedInUser(null);
            setloadingContext(false);
        }
    }, [])

    return <AuthContext.Provider value={{ loggedInUser, setLogeedInUser, loadingContext }}>
        {props.children}
    </AuthContext.Provider>

}

export { AuthContext, AuthContextComponent }