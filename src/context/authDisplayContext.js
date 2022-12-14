import { createContext, useState } from "react";

const authDisplayContext = createContext();

function AuthDisplayContextComponent(props) {

    const [displaySelect, setDisplaySelect] = useState({
        selected: ""
    });

    return (
        <authDisplayContext.Provider value={{ displaySelect, setDisplaySelect }}>
            {props.children}
        </authDisplayContext.Provider>
    );
}

export { authDisplayContext, AuthDisplayContextComponent }

