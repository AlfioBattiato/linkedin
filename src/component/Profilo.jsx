import { Col, Container, Row } from "react-bootstrap";
import MyButton from "./MyButton";
import { ReactComponent as Matita } from '../svg/matita.svg'

function Profilo() {
    return (<>
        <Container className="py-5">
            <Row className="gx-5">
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione principale a sinistra */}
                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Col xs={12} md={8} className="border rounded p-0" >
                    <div className="position-relative">
                        <img className="w-100 object-fit-cover" height={"355rem"} src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="copertina"></img>
                        <img className="rounded-circle object-fit-cover border border-white border-3 position-absolute position-absolute top-100 startP translate-middle " width={"150rem"} height={"150rem"} src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" ></img>
                        <div className="position-absolute top-0 end-0 m-3"><button className="border-0 rounded-circle p-2 text-primary" width="155rem" height="155rem">
                            <Matita></Matita>
                        </button></div>
                    </div>


                </Col>


                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione secondaria a destra */}
                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Col xs={12} md={4} className="" >
                    <Row className="gy-2">
                        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////Section 1 */}

                        <Col xs={12} className="rounded border p-3 bg-white">

                            <h5 className="d-flex justify-content-between fs-5">Lingua del profilo   <img src="assets/matita.svg" alt="" /> </h5>

                            <p className="text-secondary">Italiano</p>
                            <hr></hr>
                            <h5 className="d-flex justify-content-between">Profilo pubblico e URL  <img src="assets/matita.svg" alt="" /></h5>
                            <p className="text-secondary m-0">www-linkedin.com/in/nome-utente-021545</p>

                        </Col>
                        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////Section 2 */}

                        <Col xs={12} className="rounded border py-3 bg-white text-secondary" >
                            <p className="text-center sizeSmall">utente, investi sul tuo futuro con quetsa offerta esclusiva</p>
                            <div className="d-flex justify-content-center">
                                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" width={"65rem"} object-fit-cover class="rounded-circle object-fit-cover" alt="..." />
                                <img src="assets/logo.svg" width={"65rem"} alt="logo" />
                            </div>
                            <div className="text-center">
                                <p className="text-center mt-3">50% di sconto su 2 mesi di Linkedln Premium!</p>
                                <MyButton text={"50% di sconto"} colore={"primary"}></MyButton>
                            </div>
                        </Col>
                        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////Section 3 */}
                        <Col xs={12} className="rounded border p-3 bg-white" >
                            <h6>Altri profili simili</h6>
                            {/* ------------------------- */}
                            <div className="d-flex mt-4 gap-2">
                                <img src="https://media.licdn.com/dms/image/D4D35AQEeGYdFzZ5XWg/profile-framedphoto-shrink_100_100/0/1711738112996?e=1712671200&v=beta&t=zilrci_acFrACsrvC2FYm-2ossCXGhUMYueHw0Yi_I0" width={"65rem"} height={"65rem"} object-fit-cover class="rounded-circle object-fit-cover" alt="..." />
                                <div>
                                    <h6>Puddu Daiddo</h6>
                                    <p>Sardo appassionato di gaming e informatica</p>
                                    <MyButton text={` Messaggio`} colore={"secondary"} img={"/assets/freccia.svg"}></MyButton>
                                </div>
                            </div>
                            {/* ----------------------- */}
                            <div className="d-flex mt-4 gap-2">
                                <img src="https://media.licdn.com/dms/image/C4D03AQHxDAmpuVueCg/profile-displayphoto-shrink_100_100/0/1568286277930?e=1717632000&v=beta&t=6xqCGP_MPSAq3rQ21WXwrfa3ORJjJtKA-Ga_OQcUMrQ" width={"65rem"} height={"65rem"} object-fit-cover class="rounded-circle object-fit-cover" alt="..." />
                                <div>
                                    <h6>Stefano Casasola</h6>
                                    <p>Founder & Software Developer @ Nucleode SRL - Educator @ EPICODE - IT Consultant</p>
                                    <MyButton text={" Collegati"} img={"/assets/addFriend.svg"} colore={"secondary"}></MyButton>
                                </div>
                            </div>
                            {/* ----------------------- */}
                            <div className="d-flex mt-4 gap-2">
                                <img src="https://media.licdn.com/dms/image/C5603AQH2Lc6nvl_INA/profile-displayphoto-shrink_200_200/0/1516964106992?e=1717632000&v=beta&t=i5QO62t4k79SqzRXG6Oojl9ntEaz-NaAxOn2qF-Y69w" width={"65rem"} height={"65rem"} object-fit-cover class="rounded-circle object-fit-cover" alt="..." />
                                <div>
                                    <h6>Stefano Miceli</h6>
                                    <p>Front-end Developer & Creative Director @ Nucleode SRL</p>
                                    <MyButton text={" Collegati"} img={"/assets/addFriend.svg"} colore={"secondary"}></MyButton>
                                </div>
                            </div>
                            {/* ------------------------- */}
                            <div className="d-flex mt-4 gap-2">
                                <img src="https://media.licdn.com/dms/image/D4D03AQGc0anQAXaPQw/profile-displayphoto-shrink_200_200/0/1710107141512?e=1717632000&v=beta&t=FTpk61oGYaS6ML6IxbhWDctCkGBMovRm53k1wuUJ5NE" width={"65rem"} height={"65rem"} object-fit-cover class="rounded-circle object-fit-cover" alt="..." />
                                <div>
                                    <h6>Luca Sbarbuto</h6>
                                    <p>Junior Front-End Developer | Graphic Designer</p>
                                    <MyButton text={" Segui"} img={"/assets/+.svg"} colore={"secondary"}></MyButton>
                                </div>
                            </div>
                            {/* ----------------------------- */}
                            <hr />
                            <p className="text-center fw-semibold m-0"> Mostra Tutto</p>
                        </Col>
                        {/*///////////////////////////////////////////////////////////////// persone che potresti conoscere///////////// */}
                        <Col xs={12} className="rounded border p-3 bg-white" >
                            <h6>Persone che potresti conoscere</h6>
                            <p className="text-secondary">Dalla tua scuola o università</p>



                            {/* ----------------------- */}
                            <div className="d-flex mt-4 gap-2">
                                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww" width={"65rem"} height={"65rem"} object-fit-cover class="rounded-circle object-fit-cover" alt="..." />
                                <div>
                                    <h6>Stefano Alberti</h6>
                                    <p>Chief Business Development Officer , Vice President and...</p>
                                    <MyButton text={" Collegati"} img={"/assets/addFriend.svg"} colore={"secondary"}></MyButton>
                                </div>
                            </div>
                            {/* ------------------------- */}
                            <div className="d-flex mt-4 gap-2">
                                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" width={"65rem"} height={"65rem"} object-fit-cover class="rounded-circle object-fit-cover" alt="..." />
                                <div>
                                    <h6>Francesco  Rossi</h6>
                                    <p>Sviluppatore Java|Desiner</p>
                                    <MyButton text={" Segui"} img={"/assets/+.svg"} colore={"secondary"}></MyButton>
                                </div>
                            </div>
                            {/* ----------------------------- */}
                            <hr />
                            <p className="text-center fw-semibold m-0"> Mostra Tutto</p>
                        </Col>

                    </Row>
                </Col>
            </Row>

        </Container>



    </>)
}
export default Profilo;