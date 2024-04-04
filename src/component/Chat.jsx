import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Chat() {
  const state = useSelector((state) => state.utente);
  const [show, setShow] = useState("hidden");
  const location = useLocation();



  

  return (
    <>
      {location.pathname === "/" ? (
        <></>
      ) : (
        <div className="chat bg-white position-fixed p-2 border  rounded">
          <Row className="align-items-center">
            <Col xs={2}>
              <button type="button" className=" position-relative p-0 border-0 bg-white">
                <img
                  src={state?.image}
                  alt="avatar"
                  width={"37rem"}
                  height={"37rem"}
                  className="rounded-circle object-fit-cover"
                />
                <span className="position-absolute bottom-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1">
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Col>
            <Col xs={6}>
              <h6 className="m-0">Messaggistica</h6>
            </Col>
            <Col xs={2}>
              <img src="/assets/Puntini.svg" alt="img" />
            </Col>
            <Col xs={2}>
              <img
                src={show === "hidden" ? "/assets/svgexport-12.svg" : "/assets/svgexport-18.svg"}
                alt="img"
                onClick={() => (show === "hidden" ? setShow("show") : setShow("hidden"))}
              />
            </Col>
          </Row>
          <div className={`pt-3 ${show}`}>
            <input
              className="form-control me-2"
              style={{ backgroundColor: "#EDF3F8" }}
              type="search"
              placeholder="Cerca"
              aria-label="Search"
            />
            <div className="d-flex  pt-3">
              <h6 className="text-success m-0 pb-2 border-bottom border-success border-3 w-50 text-center">
                In Evidenza
              </h6>
              <h6 className="m-0 w-50 text-center border-bottom">Altro</h6>
            </div>
            {/* da qui partono gli sms */}
            <Container>
              <div className="row mb-1 align-items-center gx-0 w-100">
                <Col xs={3} className="">
                  <button type="button" className=" position-relative p-0 border-0 bg-white d-flex ">
                    <img
                    src={
                      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    alt="avatar"
                    width={"50rem"}
                    height={"50rem"}
                    className="rounded-circle object-fit-cover"
                  />
                    <span className="position-absolute  translate-middle badge border border-light rounded-circle pallino">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Col>

                <Col xs={9} style={{ marginTop: "10px" }}>
                  <div>
                    <h6 className="m-0 d-flex">
                      Marta Bianchi <span className="text-secondary ms-auto sizeSmall">7 feb</span>
                    </h6>
                  </div>
                  <p className="sizeSmall m-0 border-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Col>
              </div>
              <div className="row mb-1 align-items-center gx-0 w-100">
                <Col xs={3} className="">
                  <button type="button" className=" position-relative p-0 border-0 bg-white d-flex ">
                    <img
                    src={
                      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    alt="avatar"
                    width={"50rem"}
                    height={"50rem"}
                    className="rounded-circle object-fit-cover"
                  />
                    <span className="position-absolute  translate-middle badge border border-light rounded-circle pallino">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Col>

                <Col xs={9} style={{ marginTop: "10px" }}>
                  <div>
                    <h6 className="m-0 d-flex">
                      Marta Bianchi <span className="text-secondary ms-auto sizeSmall">7 feb</span>
                    </h6>
                  </div>
                  <p className="sizeSmall m-0 border-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Col>
              </div>

           
            </Container>
          </div>
        </div >
      )
      }
    </>
  );
}
export default Chat;
