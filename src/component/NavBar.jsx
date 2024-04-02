import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/style/navbar.css";
import Logo from "../assets/images/svgexport-49_logo_navbar.svg";
import { Form } from "react-bootstrap";
import research from "../assets/images/svgexport-51_research_small.svg";
import picture from "../assets/images/logo-astronauta.jpg";
// import home from "../assets/images/svgexport-52_house_navbar.svg";
import network from "../assets/images/svgexport-53_network_navbar.svg";
import jobs from "../assets/images/svgexport-54_jobs_navbar.svg";
import messages from "../assets/images/svgexport-55_messages_navbar.svg";
import notification from "../assets/images/svgexport-56_alerts_navbar.svg";
import business from "../assets/images/svgexport-58_business_navbar.svg";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <div className="d-flex me-2">
          <Navbar.Brand href="#home" className="d-flex justify-content-end container_logo_navbar_fixed m-0">
            <img src={Logo} alt="logo" width="50px" height="50px" className="Logo_navbar_fixed " />
          </Navbar.Brand>
        </div>

        <div>
          <div className="position-relative">
            <img src={research} alt="research_icon" className="position-absolute research_icon_navbar" />
            <Form.Control type="text" placeholder="Search" className="px-5 research_input_form_navbar" />
          </div>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <div className="d-flex">
            <Nav className="me-auto">
              <div className="icons_navbar">
                <img src="/assets/house.svg" alt="home_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Home
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src={network} alt="network_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Network
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src={jobs} alt="jobs_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Jobs
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src={messages} alt="messages_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Messages
                </Nav.Link>
              </div>
              <div className="icons_navbar">
                <img src={notification} alt="notification_icon" />
                <Nav.Link href="#features" className="pt-0">
                  Notifications
                </Nav.Link>
              </div>
              <div className="icons_navbar">
                <div className="d-flex justify-content-center">
                  <img src={picture} alt="profile_picture" width="30px" className="image_dropdown_navbar " />
                </div>
                <NavDropdown title="Me" id="collapsible-nav-dropdown">
                  <div>
                    <div>
                      <img src={picture} alt="draft_picture" width="30%" className="image_dropdown_navbar" />
                      <div>
                        <p>Amanda Marchetti</p>
                        <p>Full Stack Developer</p>
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
                <img src={business} alt="business_icon mb-0" />
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

export default NavBar;
