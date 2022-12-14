import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { authDisplayContext } from "../../../context/authDisplayContext";
import { useContext, useEffect, useState } from "react";
import { CardDisplayCustomer } from "../CardDisplayCustomer";

function CardDisplay() {

    const { displaySelect, setDisplaySelect } = useContext(authDisplayContext);
    const [customerContents, setCustomerContents] = useState([]);
    const [processContents, setProcessContents] = useState([]);
    const [meetingContents, setMeetingContents] = useState([]);

    useEffect(() => {
        async function fetchContents() {
            try {
                if (displaySelect.selected === "customer") {
                    const res = await api.get("/customer");
                    setCustomerContents(res.data);
                }
                if (displaySelect.selected === "process") {
                    const res = await api.get("/process");
                    setProcessContents(res.data);
                }
                if (displaySelect.selected === "meeting") {
                    const res = await api.get("/meeting");
                    setMeetingContents(res.data);
                }
            } catch (err) {
                console.log(`Erro no Front-end - CardDisplay : ${err}`);
            }
        }
        fetchContents();
    }, [])












    return (
        <>
            {displaySelect.selected === "customer" ?
                <>
                    <h1>Customer</h1>
                    {customerContents.map((currentElement) => {
                        return <CardDisplayCustomer
                            cpf={currentElement.cpf}
                            name={currentElement.name}
                            age={currentElement.age}
                            email={currentElement.email}
                            phone={currentElement.phone}
                        />
                    })}
                    {setDisplaySelect({ selected: "" })}
                </>
                :
                displaySelect.selected === "process" ?
                    <>
                        <h1> Process</h1>
                        {setDisplaySelect({ selected: "" })}
                    </>
                    :
                    <>
                        <h1>Meeting</h1>
                        {setDisplaySelect({ selected: "" })}
                    </>
            }
        </>
    )
}

export { CardDisplay }