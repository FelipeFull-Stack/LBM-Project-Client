import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { authDisplayContext } from "../../../context/authDisplayContext";
import { AuthContext } from "../../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { CardDisplayCustomer } from "../CardDisplayCustomer";

function CardDisplay() {

    const { displaySelect, setDisplaySelect } = useContext(authDisplayContext);
    const { loadingContext } = useContext(AuthContext);
    const [customerContents, setCustomerContents] = useState([]);
    const [processContents, setProcessContents] = useState([]);
    const [meetingContents, setMeetingContents] = useState([]);

    console.log(`displaySelect: ${displaySelect.selected}`)

    useEffect(() => {
        async function fetchContents() {
            try {
                const responseCustomer = await api.get("/customer");
                const responseProcess = await api.get("/process");
                const responseMeeting = await api.get("/meeting");
                setCustomerContents(responseCustomer.data);
                setProcessContents(responseProcess.data);
                setMeetingContents(responseMeeting.data);
                if (displaySelect.selected === "customer") {

                }
                if (displaySelect.selected === "process") {

                }
                if (displaySelect.selected === "meeting") {
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
                    {customerContents === {} ?
                        { loadingContext }
                        :
                        <>
                            <h1>Customer</h1>
                            <p>{customerContents[0].name}</p>
                            {/* {setDisplaySelect({ selected: "" })} */}
                            {console.log(customerContents)}
                            <div className="col-5" style={{
                                maxHeight: "90vh;", overflow: "scroll"
                            }}>
                                <div className="list-group">
                                    {customerContents.map((currentElement) => {
                                        return <CardDisplayCustomer
                                            cpf={currentElement.cpf}
                                            name={currentElement.name}
                                            age={currentElement.age}
                                            email={currentElement.email}
                                            phone={currentElement.phone}
                                        />
                                    })}
                                </div>
                            </div>
                        </>
                    }
                </>
                :
                displaySelect.selected === "process" ?
                    <>
                        <h1> Process</h1>
                        <p></p>
                        {console.log(processContents)}
                        {/* {setDisplaySelect({ selected: "" })} */}
                    </>
                    :
                    <>
                        <h1>Meeting</h1>
                        <p></p>
                        <p></p>
                        {console.log(meetingContents)}
                        {/* {setDisplaySelect({ selected: "" })} */}
                    </>
            }
        </>
    )
}

export { CardDisplay }