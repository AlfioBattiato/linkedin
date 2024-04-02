import React from "react";
import "./login.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Container fluid className="box justify-content-center ">
      <Row className=" justify-content-center ">
        <Col xs={12} sm={12} md={4} lg={4} className="card card102 justify-content-center">
          <Row>
            {/* logo linkedin */}
            <Col>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="loader__linkedin-logo"
                width="150"
                height="48"
                viewBox="0 0 190 48"
              >
                <g>
                  <g>
                    <path
                      d="M58,27.22V41H51V28.88c0-3.7-2.07-5.24-4-5.24a5,5,0,0,0-5.14,4.85,4.34,4.34,0,0,0,0,.51V41H35V18h6.6v3.25h.09c.69-1.41,3.64-3.75,7.66-3.75S58,20.22,58,27.22ZM24,41h7V18H24ZM27.5,6.45a4.05,4.05,0,1,0,4.1,4.05,4,4,0,0,0-4-4ZM190,3.5v41a3.5,3.5,0,0,1-3.5,3.5h-41a3.5,3.5,0,0,1-3.5-3.5V3.5A3.5,3.5,0,0,1,145.5,0h41A3.5,3.5,0,0,1,190,3.5ZM156,18h-7V41h7Zm.6-7.5a4.1,4.1,0,1,0-4.15,4.05h.05a4,4,0,0,0,4.1-3.9ZM183,27.22c0-7-4.63-9.72-8.65-9.72s-7,2.34-7.66,3.75h-.09V18H160V41h7V29c0-3.69,2.51-5.33,4.95-5.33,2,0,4.05,1.54,4.05,5.24V41h7ZM8,7H0V41H21V34H8ZM108,29.77v2H91a1.33,1.33,0,0,0,.11.43c.58,1.93,2.67,3.56,5.75,3.56A6.3,6.3,0,0,0,102,33.52l5.1,3.18a12.72,12.72,0,0,1-10.45,4.8C89.94,41.5,84,37.42,84,29.59S90,17.5,96.44,17.5,108,21.81,108,29.77ZM101,27c0-2.4-1.56-4.38-4.75-4.38-3,0-5.09,2-5.25,4.38ZM85.26,18H76.68l-7.54,9.37H69V7H62V41h7V30h.14l7.72,11h8.77L76.2,28.43ZM128,7h7V41h-6.6V38h-.09c-.88,1.52-3.24,3.49-7.4,3.49-5,0-10.91-3.63-10.91-12,0-7.53,5.1-11.95,10.82-11.95a9.55,9.55,0,0,1,7.09,3H128Zm.3,22.49a5.74,5.74,0,0,0-5.59-5.89h-.15A5.54,5.54,0,0,0,116.89,29c0,.15,0,.29,0,.44a5.61,5.61,0,0,0,5.26,5.94h.4A5.83,5.83,0,0,0,128.3,29.49Z"
                      fill="#0A66C2"
                    ></path>
                  </g>
                </g>
              </svg>
            </Col>
          </Row>

          <Row className=" justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8}>
              <h4 className="welcome101">Accedi</h4>
            </Col>

            {/* form */}
            <Col xs={12} sm={12} md={12} lg={8}>
              <Form.Group className="sign-form-group">
                <Form.Control type="email" placeholder="Email or Phone" className="form-control form-signin" />
                <Form.Control type="password" placeholder="Password" className="form-control form-signin" />
                <div className="mb-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label mt-2" htmlFor="customCheck1">
                      Ricordami
                    </label>
                  </div>
                </div>
                <Row className="space101">
                  <Col>
                    <Button variant="primary" className="btn">
                      Accedi
                    </Button>{" "}
                  </Col>
                  <Col>
                    {" "}
                    <Button variant="primary" className="btn">
                      Registrati
                    </Button>{" "}
                  </Col>
                </Row>
                <div className="forgot101">
                  <span>Password dimenticata?</span>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="under101">
              <span>Copyright Policy</span>
              <p>User Agreement</p>
            </Col>
            <Col className="under101">
              <span>Privacy Policy</span>
              <p>Cookie Policy</p>
            </Col>
            <Col className="under101">
              <span>Send Feedback</span>
              <p>Community Guidelines</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
