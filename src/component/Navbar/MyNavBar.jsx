import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import { Form } from "react-bootstrap";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";

function MyNavBar() {
  return (
    <Navbar collapseOnSelect expand="xs" className="flex-xs-row-reverse bg-body-tertiary">
      <Container className="justify-content-evenly justify-md-content-between">
        <div className="d-flex align-items-center gap-sm-3">
          <div className="d-flex me-2">
            <Navbar.Brand href="#home" className="container_logo_navbar_fixed m-0" width="45px" height="45px">
              <img src="/assets/logo.svg" alt="logo" width="45px" height="45px" className="Logo_navbar_fixed " />
            </Navbar.Brand>
          </div>
        </div>

        <div className="d-flex">
          <div className=" gap-5 d-flex ">
            <Nav className="d-flex flex-row align-items-center ms-3 ms-md-4 gap-4">
              <div>
                <div className="position-relative">
                  <img
                    src="/assets/cerca_bold.svg"
                    alt="cerca_bold"
                    className="d-lg-none cerca_bold_icon_navbar"
                    style={{ width: "25px" }}
                  />
                  <img
                    src="/assets/cerca.svg"
                    alt="research_icon"
                    className="d-none d-lg-block position-absolute research_icon_navbar"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Cerca"
                    className="d-none d-lg-block ps-5 research_input_form_navbar"
                    width={"20%"}
                  />
                </div>
              </div>
              <div className="icons_navbar">
                <Nav.Link href="/Home" className="p-0">
                  <img src="/assets/home.svg" alt="home_icon" />
                  <p className="d-none d-md-block m-0"> Home</p>
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <Nav.Link href="/Rete" className="p-0">
                  <img src="/assets/people.svg" alt="network_icon" />
                  <p className="d-none d-md-block m-0">Network</p>
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <Nav.Link href="/Lavoro" className="p-0">
                  <img src="/assets/work.svg" alt="jobs_icon" />
                  <p className="d-none d-md-block m-0">Jobs</p>
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <Nav.Link href="/Messagistica" className="p-0">
                  <img src="/assets/message.svg" alt="messages_icon" />
                  <p className="d-none d-md-block m-0">Messages</p>
                </Nav.Link>
              </div>
              <div className="icons_navbar">
                <Nav.Link href="/Notifiche" className="p-0">
                  <img src="/assets/campana.svg" alt="notification_icon" />
                  <p className="d-none d-md-block m-0">Notifications</p>
                </Nav.Link>
              </div>
              <div className="icons_navbar icon_profile_navbar">
                <Nav.Link href="#" className="p-0 ">
                  <img
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="profile_picture"
                    width={"25px"}
                    height={"25px"}
                    className="image_dropdown_navbar object-fit-cover"
                  />
                  <p className="d-none d-md-block m-0">Me</p>
                </Nav.Link>
              </div>
              <div className="icons_navbar icon_business_navbar">
                <Nav.Link href="#" className="p-0">
                  <img src="/assets/business.svg" alt="business_icon mb-0" />
                  <p className="d-none d-md-block m-0">Business</p>
                </Nav.Link>
              </div>
              <div className="icons_navbar icon_tre_punti_navbar">
                <Nav.Link href="#" className="p-0 position-relative">
                  <img src="/assets/tre_punti.svg" alt="business_icon mb-0" />
                  <NavDropdown
                    id="basic-nav-dropdown"
                    className="position-absolute"
                    style={{ right: 0, left: 0, top: 0, bottom: 0 }}
                  >
                    <Nav.Link href="#" className="p-0">
                      <img src="/assets/business.svg" alt="business_icon mb-0" />
                      <p className="d-none d-md-block m-0">Business</p>
                    </Nav.Link>
                  </NavDropdown>
                </Nav.Link>
              </div>
            </Nav>
          </div>

          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse expand="xs" id="responsive-navbar-nav" className="justify-content-start gap-2 ms-4">
            <div className="icons_navbar">
              <div className="d-flex justify-content-center">
                <img
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profile_picture"
                  width={"25px"}
                  height={"25px"}
                  className="image_dropdown_navbar object-fit-cover"
                />
              </div>
              <NavDropdown>
                <div style={{ width: "20rem" }}>
                  <div className="d-flex px-2">
                    <div className="d-flex" style={{ width: "52px" }}>
                      <img
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="draft_picture"
                        width={"50px"}
                        height={"50px"}
                        className="image_dropdown_navbar object-fit-cover ms-1"
                      />
                    </div>
                    <div>
                      <div className="ms-2">
                        <p className="fw-semibold mb-0">Mario Rossi</p>
                        <p>Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-3">
                    <Link to={"/Profilo"} className="d-flex justify-content-center" style={{ width: "18rem" }}>
                      <MyButton
                        text={"Visualizza Profilo"}
                        colore={"primary"}
                        link={"/Profilo"}
                        className="text-center"
                        Style={{ width: "100%!important" }}
                      ></MyButton>
                    </Link>
                  </div>
                </div>
              </NavDropdown>
            </div>

            <div className="icons_navbar">
              <NavDropdown title="Me" className="dropdown-backdrop p-0 "></NavDropdown>
              <div className="mx-3">
                <Link to={"/Login"} className="d-flex justify-content-center mt-3" style={{ width: "18rem" }}>
                  <MyButton
                    text={"Uscire"}
                    colore={"primary"}
                    link={"/Login"}
                    className="text-center"
                    Style={{ width: "100%!important" }}
                  ></MyButton>
                </Link>
              </div>
            </div>
            <Nav>
              <div className="container icons_navbar icon_business_navbar">
                <div className="d-flex justify-content-center"></div>
                <img src="/assets/business.svg" alt="business_icon mb-0" />
                <NavDropdown title="Business" id="collapsible-nav-dropdown">
                  <div>
                    <div>
                      <div>
                        <p>to fix....</p>
                      </div>
                    </div>
                  </div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse> */}
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
