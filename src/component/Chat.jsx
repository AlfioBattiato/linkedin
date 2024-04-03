import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

function Chat(){
    const state=useSelector(state=>state.utente[0])
    return(<>
    <div className="chat bg-white position-sticky bottom-0 start-100 p-2 border  rounded">
        <Row className="align-items-center">
            <Col xs={2}>
                <img src={state?.image} alt="avatar" width={"37rem"} height={"37rem"} className="rounded-circle object-fit-cover "></img>
            </Col>
            <Col xs={5}>
                <h6>Messaggistica</h6>
            </Col>
            <Col xs={2}>
                <img src="/assets/Puntini.svg" alt="img"  />
            </Col>
            <Col xs={2}>
            <img src="/assets/+.svg" alt="img"  />
            </Col>
        </Row>




    </div>
    
    
    
    
    </>)
}
export default Chat