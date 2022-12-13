import { createContext, useState } from "react";

const authClickContext = createContext();

function AuthClickContextComponent(props) {

    const [clicked, setClicked] = useState({

    });

    return (
        <authClickContext.Provider value={{ clicked, setClicked }}>
            {props.children}
        </authClickContext.Provider>
    );
}

export { authClickContext, AuthClickContextComponent }

