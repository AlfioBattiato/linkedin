import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style/navbar.css";

import { Form } from "react-bootstrap";
import MyButton from "./MyButton";


function MyNavBar() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <div className="d-flex me-2">
          <Navbar.Brand href="#home" className="d-flex justify-content-end container_logo_navbar_fixed m-0">
            <img src="/assets/logo.svg" alt="logo" width="45px" height="45px" className="Logo_navbar_fixed " />
          </Navbar.Brand>
        </div>

        <div>
          <div className="position-relative">
            <img src="/assets/cerca.svg" alt="research_icon" className="position-absolute research_icon_navbar" />
            <Form.Control type="text" placeholder="Search" className="px-5 research_input_form_navbar" />
          </div>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <div className="d-flex gap-5">
            <Nav className="me-auto d-flex gap-3 align-items-center">
              <div className="icons_navbar">
                <img src="/assets/home.svg" alt="home_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Home
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src="/assets/people.svg" alt="network_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Network
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src="/assets/work.svg" alt="jobs_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Jobs
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src="/assets/message.svg" alt="messages_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Messages
                </Nav.Link>
              </div>
              <div className="icons_navbar">
                <img src="/assets/campana.svg" alt="notification_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Notifications
                </Nav.Link>
              </div>
              <div className="icons_navbar">
                <div className="d-flex justify-content-center ">
                  <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="profile_picture" width="30px" height={"30px"} className="image_dropdown_navbar object-fit-cover" />
                </div>
                <NavDropdown title="Me" id="collapsible-nav-dropdown">
                  <div style={{width:"18rem"}}>
                    <div className="px-2">
                      <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="draft_picture" width="30px"height={"30px"} className="image_dropdown_navbar object-fit-cover" />
                      <div>
                        <p className="fw-semibold">Amanda Marchetti</p>
                        <p>Full Stack Developer</p>
                        <MyButton text={"Visualizza Profilo"} colore={"primary"}></MyButton>
                      </div>
                    </div>
                  </div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
            <Nav>
              <div className="container icons_navbar">
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
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
