import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardCustomer } from "../../components/Cards/CardCustomer";
import { CardMeeting } from "../../components/Cards/CardMeeting";
import { CardProcess } from "../../components/Cards/CardProcess";

function CardPage(props) {
    const navigate = useNavigate();
    const { costumerClicked, processClicked, meetingClicked } = props;

    return (
        <> {
            costumerClicked === true ?
                <>
                    {costumerClicked = false}
                    < CardCustomer />
                </>
                :
                processClicked === true ?
                    <>
                        {processClicked = false}
                        < CardProcess />
                    </>
                    :
                    meetingClicked === true ?
                        <>
                            {meetingClicked = false}
                            < CardMeeting />
                        </>
                        :
                        navigate("/home")
        }
        </>
    )

}

export { CardPage }