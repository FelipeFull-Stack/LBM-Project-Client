import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { authDisplayContext } from "../../../context/authDisplayContext";
import { AuthContext } from "../../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { CardDisplayCustomer } from "../DisplayCards/CardDisplayCustomer";
import { CardDisplayProcess } from "../DisplayCards/CardDisplayProcess";
import { CardDisplayMeeting } from "../DisplayCards/CardDisplayMeeting";

function CardDisplay() {
    const navigate = useNavigate();
    const { displaySelect, setDisplaySelect } = useContext(authDisplayContext);
    const { loadingContext } = useContext(AuthContext);
    const [customerContents, setCustomerContents] = useState([]);
    const [processContents, setProcessContents] = useState([]);
    const [meetingContents, setMeetingContents] = useState([]);

    console.log(`displaySelect: ${displaySelect.selected}`);

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

                            {/* {setDisplaySelect({ selected: "" })} */}
                            {console.log(customerContents)}
                            <div>

                            </div>
                            {customerContents.map((currentElement) => {
                                return (
                                    <>
                                        <CardDisplayCustomer
                                            cpf={currentElement.cpf}
                                            name={currentElement.name}
                                            age={currentElement.age}
                                            email={currentElement.email}
                                            phone={currentElement.phone}
                                        />
                                    </>
                                )
                            })}

                        </>
                    }
                </>
                :
                displaySelect.selected === "process" ?
                    <>

                        <div>
                            <input />
                            <button>Pesquisar</button>
                        </div>

                        <div className="" style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "baseline", height: "7vh" }}>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "6%" }}> </div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "26%", color: "white" }}>Nº Processo:</div>
                            <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "9%", color: "white" }}>Tipo:</div>
                            <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "15%", color: "white" }}>Valor:</div>
                            <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "16%", color: "white" }}>Etapa:</div>
                        </div>
                        {processContents.map((currentElement) => {
                            return <CardDisplayProcess
                                numProcess={currentElement.numProcess}
                                type={currentElement.type}
                                value={currentElement.value}
                                etapa={currentElement.etapa}
                            />
                        })}

                        {console.log(processContents)}
                        {/* {setDisplaySelect({ selected: "" })} */}
                    </>
                    :
                    <>
                        <div>

                        </div>
                        {meetingContents.map((currentElement) => {
                            return <CardDisplayMeeting
                                date={currentElement.date}
                                time={currentElement.time}
                                type={currentElement.type}
                            />
                        })}
                        {console.log(meetingContents)}
                        {/* {setDisplaySelect({ selected: "" })} */}
                    </>
            }
        </>
    )
}

export { CardDisplay }