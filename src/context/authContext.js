import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

function AuthContextComponent(props) {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [loadingContext, setloadingContext] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");

        const parsedStoredUser = JSON.parse(storedUser || '""');

        if (parsedStoredUser.token) {
            setLoggedInUser(parsedStoredUser);
            setloadingContext(false);
        } else {
            setLoggedInUser(null);
            setloadingContext(false);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ loggedInUser, setLoggedInUser, loadingContext }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextComponent };