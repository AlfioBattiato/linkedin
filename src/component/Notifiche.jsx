import { Col, Container, Row } from "react-bootstrap";
import MyButton from "./MyButton";
import { ReactComponent as Matita } from '../svg/matita.svg'
function Notifiche() {
    return (<>
        <Container className="py-5">
            <Row className="gx-4">
                <Col xs={12} md={2}  >
                    <div className="bg-white p-3 border rounded">
                        <h6>Gestisci le tue notifiche</h6>
                        <a href="#/" className="fw-semibold m-0 text-decoration-none">Impostazioni</a>
                    </div>

                </Col>
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione centrale */}
                <Col xs={12} md={7}  >
                    <Row className="gy-2">
                        <Col xs={12}>
                            <div className="d-flex p-2 gap-2 flex-wrap border rounded bg-white">
                                <MyButton text={"Tutto"} colore={"success"}></MyButton>
                                <MyButton text={"I miei post"} colore={"outline-secondary"}></MyButton>
                                <MyButton text={"Menzioni"} colore={"outline-secondary"}></MyButton>
                            </div>
                        </Col>
                        <Col xs={12} >
                            <div className="rounded bg-white border p-3">
                                <Row className="gy-2" >
                                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                                        <img className="object-fit-cover" width={"55rem"} height={"55rem"} alt="img" src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&aut
                                        o=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9ufGVufDB8fDB8fHww"></img>
                                        <p style={{width:"70%"}} className="m-0 text-secondary sizeSmall">107 persone parteciperanno a un evento creato da Amazon Italia quest settimana. Vedi l'evento.</p>
                                        <div className="ms-auto"> 
                                            <p className="sizeSmall text-secondary m-0 ">25 minuti</p>
                                            <p className="m-0 fs-4 text-end">...</p>
                                        
                                        </div>
                                    </Col>
                                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                                        <img className="object-fit-cover rounded-circle" width={"55rem"} height={"55rem"} alt="img" src="https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww"></img>
                                        <p style={{width:"70%"}} className="m-0 text-secondary sizeSmall"><strong>Denise Dimaio </strong>ha diffuso un aggiornamento sul recruting.</p>
                                        <div className="ms-auto"> 
                                            <p className="sizeSmall text-secondary m-0 ">2 ore</p>
                                            <p className="m-0 fs-4 text-end">...</p>
                                        
                                        </div>
                                    </Col>
                                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                                        <img className="object-fit-cover rounded-circle" width={"55rem"} height={"55rem"} alt="img" src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"></img>
                                        <p style={{width:"70%"}} className="m-0 text-secondary sizeSmall"><strong>Alessio Biodi </strong>ha commentato il profilo di stefania Sperando:Arredare la solitudine una metafora...</p>
                                        <div className="ms-auto"> 
                                            <p className="sizeSmall text-secondary m-0 ">12 ore</p>
                                            <p className="m-0 fs-4 text-end">...</p>
                                        
                                        </div>
                                    </Col>
                                 
                                </Row>
                            </div>
                        </Col>
                    </Row>

                </Col>
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione secondaria a destra */}
                <Col xs={12} md={3}  >

                    <div className="bg-white p-3">
                        <div className="row">
                            <span className="sizeSmall fw-semibold text-end">Annuncio ...</span>
                            <p className="text-center sizeSmall ">utente, investi sul tuo futuro con questa offerta esclusiva </p>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" width={"65rem"} className="rounded-circle object-fit-cover" alt="..." />
                            <img src="assets/logo.svg" width={"65rem"} alt="logo" />
                        </div>
                        <div className="text-center">
                            <p className="text-center mt-3">50% di sconto su 2 mesi di Linkedln Premium!</p>
                            <MyButton text={"50% di sconto"} colore={"outline-primary"}></MyButton>
                        </div>
                    </div>

                </Col>
            </Row>

        </Container>

    </>)
}
export default Notifiche;