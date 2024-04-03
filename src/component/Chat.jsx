import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

function Chat() {
    const state = useSelector(state => state.utente[0])
    const [show,setShow]=useState("hidden")

    return (<>
        <div className="chat bg-white position-sticky bottom-0 start-100 p-2 border  rounded">
            <Row className="align-items-center">
                <Col xs={2}>
                    <button type="button" class=" position-relative p-0 border-0 bg-white">
                        <img src={state?.image} alt="avatar" width={"37rem"} height={"37rem"} className="rounded-circle object-fit-cover" />
                        <span className="position-absolute bottom-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                    </button>
                </Col>
                <Col xs={6}>
                    <h6 className="m-0">Messaggistica</h6>
                </Col>
                <Col xs={2}>
                    <img src="/assets/Puntini.svg" alt="img" />
                </Col>
                <Col xs={2}>
                    <img src={show==="hidden"?"/assets/svgexport-12.svg":"/assets/svgexport-18.svg"} alt="img"
                    onClick={()=>show==="hidden"?setShow("show"):setShow("hidden")} />
                </Col>
            </Row>
            <div className={`pt-3 ${show}`} >
                <input className="form-control me-2" style={{ backgroundColor: "#EDF3F8" }} type="search" placeholder="Cerca" aria-label="Search" />
                <div className="d-flex  pt-3">
                    <h6 className="text-success m-0 pb-2 border-bottom border-success border-3 w-50 text-center">In Evidenza</h6>
                    <h6 className="m-0 w-50 text-center border-bottom">Altro</h6>
                </div>
            </div>



        </div>




    </>)
}
export default Chat