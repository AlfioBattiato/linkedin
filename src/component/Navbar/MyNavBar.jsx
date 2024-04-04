import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import { Form, Dropdown } from "react-bootstrap";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";

function MyNavBar() {
  return (
    // {/* ////////////////////////////////////NAVBAR BEGINNING ////////////////////////////////////////// */}
    <Navbar collapseOnSelect expand="xs" className="flex-xs-row-reverse bg-body-tertiary">
      <Container className="justify-content-evenly">
        {/* ////////////////////////////////////LINK ICONA LOGO////////////////////////////////////////// */}
        <div className="d-flex align-items-center gap-sm-3">
          <div className="d-flex justify-content-md-end">
            <Navbar.Brand href="/Profilo" className="container_logo_navbar_fixed m-0" width="45px" height="45px">
              <img src="/assets/logo.svg" alt="logo" width="45px" height="45px" className="Logo_navbar_fixed " />
            </Navbar.Brand>
          </div>
        </div>
        {/* ////////////////////////////////////LINK ICONA SEARCH/////////////////////////////////////// */}
        <div className="d-flex">
          <div className=" gap-5 d-flex ">
            <Nav className="d-flex flex-row align-items-center ms-3 gap-4">
              <div>
                <div className="position-relative">
                  <img
                    src="/assets/cerca_bold.svg"
                    alt="cerca_bold"
                    className="ms-3 d-md-none cerca_bold_icon_navbar"
                    style={{ width: "25px" }}
                  />
                  <img
                    src="/assets/cerca.svg"
                    alt="research_icon"
                    className="d-none d-md-block position-absolute research_icon_navbar"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Cerca"
                    className="d-none d-md-block ps-5 research_input_form_navbar"
                    width={"20%"}
                  />
                </div>
              </div>

              {/* ////////////////////////////////////LINK HOME ////////////////////////////////////////// */}
              <div className="icons_navbar">
                <Nav.Link href="/Home" className="p-0 icon_home_navebar">
                  <img src="/assets/home.svg" alt="home_icon" id="home_icon_nav" />
                  <p className="d-none d-lg-block m-0"> Home</p>
                </Nav.Link>
              </div>
              {/* /////////FINO LINK HOME ////////////////////////////////////////// */}

              {/* ////////////////////////////////////LINK NETWORK ////////////////////////////////////////// */}
              <div className="icons_navbar">
                <Nav.Link href="/Rete" className="p-0">
                  <img src="/assets/people.svg" alt="network_icon" />
                  <p className="d-none d-lg-block m-0">Network</p>
                </Nav.Link>
              </div>
              {/* ///////FINO LINK NETWORK ////////////////////////////////////////////////////////////////// */}

              {/* ////////////////////////////////////LINK JOBS ////////////////////////////////////////// */}
              <div className="icons_navbar icon_jobs_navbar">
                <Nav.Link href="/Lavoro" className="p-0 ">
                  <img src="/assets/work.svg" alt="jobs_icon" />
                  <p className="d-none d-lg-block m-0">Jobs</p>
                </Nav.Link>
              </div>
              {/* ///////FINO LINK JOBS ////////////////////////////////////////////////////////////////// */}

              {/* ////////////////////////////////////LINK MESSAGES ////////////////////////////////////////// */}
              <div className="icons_navbar icon_messages_navbar">
                <Nav.Link href="/Messagistica" className="p-0">
                  <img src="/assets/message.svg" alt="messages_icon" />
                  <p className="d-none d-lg-block m-0">Messages</p>
                </Nav.Link>
              </div>
              {/* ///FINO LINK MESSAGES ////////////////////////////////////////////////////////////////////// */}

              {/* ////////////////////////////////////LINK NOTIFICATIONS ////////////////////////////////////////// */}
              <div className="icons_navbar icon_bell_navbar">
                <Nav.Link href="/Notifiche" className="p-0">
                  <img src="/assets/campana.svg" alt="notification_icon" />
                  <p className="d-none d-lg-block m-0">Notifications</p>
                  <NavDropdown
                    id="basic-nav-dropdown"
                    className="position-absolute"
                    style={{ right: 1000, left: 0, top: 50, bottom: 0 }}
                  >
                    <NavDropdown.Item href="#">
                      <div className="d-flex justify-content-center">
                        <img src="/assets/campana.svg" alt="notification_icon" className="bell_dropdown_navbar" />
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </div>
              {/* ///////FINO LINK NOTIFICATIONS//////////////////////////////////////////////////////////// */}

              {/* ////////////////////////////////LINK PROFILO//////////////////////////////////////////////// */}
              <div className="icons_navbar icon_profile_navbar">
                <Nav.Link href="#" className="p-0 ">
                  <img
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="profile_picture"
                    width={"25px"}
                    height={"25px"}
                    className="image_dropdown_navbar object-fit-cover"
                  />

                  {/* /////DROPDOWN PROFILE BEGINNING//// */}
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className="position-relative d-none d-lg-block m-0 toggle_dropdown_navbar"
                      style={{ color: "gray", height: "25px" }}
                    >
                      Me
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      className="position-absolute"
                      style={{ right: 10, left: -285, top: 30, bottom: 0, height: "25rem", width: "20rem" }}
                    >
                      {/* //////////////BOX PROFILE//////////////// */}
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
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>
              </div>
              {/* /////////FIONO LINK PROFILO///////////////////////////////////////////////////////////// */}

              {/* ///////////////////////////////////////LINK BUSINESS///////////////////////////////////////////// */}
              <div className="icons_navbar icon_business_navbar">
                <Nav.Link href="#" className="p-0">
                  <img src="/assets/business.svg" alt="business_icon mb-0" />
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className="position-relative d-none d-lg-block m-0 toggle_dropdown_navbar"
                      style={{ color: "gray", height: "25px" }}
                    >
                      Business
                    </Dropdown.Toggle>
                  </Dropdown>
                </Nav.Link>
              </div>

              {/* /////////FIONO LINK BUSINESS///////////////////////////////////////////////////////////// */}

              {/* /////////////////////////INIZIO ICONA TRE PUNTINI//////////////////////////////////////////////////////// */}

              <div className="icons_navbar ">
                <Nav.Link href="#" className="p-0 position-relative">
                  {" "}
                  {/*<a> Tre_punti */}
                  <img src="/assets/tre_punti.svg" alt="business_icon mb-0" className="icon_tre_punti_navbar" />
                  <Dropdown>
                    {" "}
                    {/*<div class= show dropdown> */}
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className="position-absolute dropdown_icon_tre_punti_navbar"
                      style={{ right: 0, left: 0, top: -20, bottom: 0, color: "gray", opacity: "0.0" }}
                    ></Dropdown.Toggle>
                    {/* //////////////BOX MINI ICONS//////////////// */}
                    <Dropdown.Menu
                      className="position-absolute d-flex justify-content-evenly mini_box_icons_dropdown_navbar"
                      style={{ right: 10, left: -210, top: 10, bottom: 0, height: "4rem", width: "15rem" }}
                    >
                      {/* ///////DROPDOWN LINK MESSAGES/////////// */}
                      <Nav.Link href="/Messagistica" className="d-flex px-2 icon_messages_dropdown_navbar ">
                        <img src="/assets/message.svg" alt="messages_icon" width={"25px"} height={"25px"} />
                        <p className="d-none d-lg-block m-0">Messages</p>
                      </Nav.Link>
                      {/* //////////DROPDOWN LINK NOTIFICATIONS/////////// */}
                      <Nav.Link href="/Notifiche" className="d-flex px-2 icon_bell_dropdown_navbar">
                        <img src="/assets/campana.svg" alt="notification_icon" width={"25px"} height={"25px"} />
                        <p className="d-none d-lg-block m-0">Notifications</p>
                      </Nav.Link>
                      {/* ////////////DROPDOWN LINK PROFILO//////// */}
                      <Nav.Link href="#" className="d-flex px-2 icon_profile_dropdown_navbar">
                        <img
                          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                          alt="profile_picture"
                          width={"25px"}
                          height={"25px"}
                          className="image_dropdown_navbar object-fit-cover"
                        />
                        <p className="d-none d-lg-block m-0">Me</p>
                      </Nav.Link>
                      {/* ///////DROPDOWN LINK BUSINESS////////// */}
                      <Nav.Link href="#" className="d-flex px-2 icon_business_dropdown_navbar">
                        <img src="/assets/business.svg" alt="business_icon mb-0" width={"25px"} height={"25px"} />
                        <p className="d-none d-lg-block m-0">Business</p>
                      </Nav.Link>
                      {/* //////////DROPDOWN LINK JOBS/////////// */}
                      <Nav.Link href="#" className="d-flex px-2 icon_jobs_dropdown_navbar">
                        <img src="/assets/work.svg" alt="jobs_icon" width={"25px"} height={"25px"} />
                        <p className="d-none d-lg-block m-0">Jobs</p>
                      </Nav.Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>
              </div>
            </Nav>
          </div>
          {/* /////////FIONO ICONA TRE PUNTINI///////////////////////////////////////////////////////////// */}
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
