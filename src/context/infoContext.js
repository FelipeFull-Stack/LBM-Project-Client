import { createContext, useState } from "react";

const infoContext = createContext();

function InfoContextComponent(props) {

    const [objectId, setObjectId] = useState({
        idSelected: "",
        type: ""
    });

    return (
        <infoContext.Provider value={{ objectId, setObjectId }}>
            {props.children}
        </infoContext.Provider>
    );
}

export { infoContext, InfoContextComponent }