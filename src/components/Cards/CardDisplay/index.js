import { api } from "../../../api/api";
import { authDisplayContext } from "../../../context/authDisplayContext";
import { AuthContext } from "../../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { CardDisplayCustomer } from "../DisplayCards/CardDisplayCustomer";
import { CardDisplayProcess } from "../DisplayCards/CardDisplayProcess";
import { CardDisplayMeeting } from "../DisplayCards/CardDisplayMeeting";

function CardDisplay() {
    const { displaySelect } = useContext(authDisplayContext);
    const { loadingContext } = useContext(AuthContext);
    const [customerContents, setCustomerContents] = useState([]);
    const [processContents, setProcessContents] = useState([]);
    const [meetingContents, setMeetingContents] = useState([]);

    console.log(`displaySelect: ${displaySelect.selected}`);

    useEffect(() => {
        async function fetchContents() {
            try {
                const responseCustomer = await api.get("/customer");
                setCustomerContents(responseCustomer.data);

                const responseProcess = await api.get("/process");
                setProcessContents(responseProcess.data);

                const responseMeeting = await api.get("/meeting");
                setMeetingContents(responseMeeting.data);

            } catch (err) {
                console.log(`Erro no Front-end - CardDisplay : ${err}`);
            }
        }
        fetchContents();
    }, []);



    return (
        <>
            {displaySelect.selected === "customer" ?
                <>
                    {customerContents === {} ?
                        { loadingContext }
                        :
                        <>
                            {/* <div>
                                <input className="rounded" />
                                <button className="rounded">Pesquisar</button>
                            </div> */}

                            <div className="" style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "baseline", height: "7vh" }}>
                                <div style={{ fontSize: "20px", fontWeight: "700", width: "7%" }}> </div>
                                <div style={{ fontSize: "20px", fontWeight: "700", width: "30%", color: "black" }}>Nome Completo:</div>
                                <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                                <div style={{ fontSize: "20px", fontWeight: "700", width: "16.5%", color: "black" }}>CPF:</div>
                                <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                                <div style={{ fontSize: "20px", fontWeight: "700", width: "25%", color: "black" }}>Contato:</div>
                            </div>
                            {customerContents.map((currentElement) => {
                                return (
                                    <>
                                        <CardDisplayCustomer
                                            id={currentElement._id}
                                            name={currentElement.name}
                                            cpf={currentElement.cpf}
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

                        <div className="m-2">
                            <input className="rounded" />
                            <button className="rounded">Pesquisar</button>
                        </div>

                        <div className="" style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "baseline", height: "7vh" }}>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "7%" }}> </div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "26%", color: "black" }}>Nº Processo:</div>
                            <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "9%", color: "black" }}>Tipo:</div>
                            <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "14%", color: "black" }}>Valor:</div>
                            <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "16%", color: "black" }}>Etapa:</div>
                        </div>
                        {processContents.map((currentElement) => {
                            return <CardDisplayProcess
                                id={currentElement._id}
                                numProcess={currentElement.numProcess}
                                type={currentElement.type}
                                value={currentElement.value}
                                etapa={currentElement.etapa}
                            />
                        })}
                    </>
                    :
                    <>
                        {/* <div>
                            <input className="rounded" />
                            <button className="rounded">Pesquisar</button>
                        </div> */}

                        <div className="" style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "baseline", height: "7vh" }}>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "7%" }}> </div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "22.5%", color: "black" }}>Data marcada:</div>
                            <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "17.5%", color: "black" }}>Horário:</div>
                            <div style={{ fontSize: "24px", fontWeight: "700", width: "1%" }}>|</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", width: "14%", color: "black" }}>Valor:</div>
                        </div>
                        {meetingContents.map((currentElement) => {
                            return <CardDisplayMeeting
                                id={currentElement._id}
                                date={currentElement.date}
                                time={currentElement.time}
                                type={currentElement.type}
                            />
                        })}
                    </>
            }
        </>
    )
}

export { CardDisplay }