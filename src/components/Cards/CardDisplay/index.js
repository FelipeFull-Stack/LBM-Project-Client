import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { authDisplayContext } from "../../../context/authDisplayContext";
import { useContext } from "react";

function CardDisplay(props) {

    const { displaySelect, setDisplaySelect } = useContext(authDisplayContext);
    const { } = props;










    return (
        <>
            {displaySelect.selected === "customer" ?
                <>
                    {setDisplaySelect({ selected: "" })}
                    <h1> Customer</h1>
                </>
                :
                displaySelect.selected === "process" ?
                    <>
                        {setDisplaySelect({ selected: "" })}
                        < h1 > Process</h1 >
                    </>
                    :
                    <>
                        {setDisplaySelect({ selected: "" })}
                        <h1>Meeting</h1>
                    </>
            }
        </>
    )
}

export { CardDisplay }