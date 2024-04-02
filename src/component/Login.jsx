import React from "react";
import { Row, Col, Container,} from "react-bootstrap";
import MyButton from "./MyButton";

function Login({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="box">
      <Container fluid>
      <Row className="w-100 mx-auto">
        <Col xs={12} md={4} ></Col>
        <Col xs={12} md={4} className="mt-5 bg-white pb-3 ">
          <div className="text-center">
            <img src="/assets/linkedin.svg" alt="logo" style={{ width: "8rem" }} className="mt-5"></img>
          </div>
          <div className="mt-4 ">
            <h4>Accedi</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Inserisci il tuo Username" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" />
              </div>
              <div className=" form-check ">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Ricordami</label>
              </div>
              <div className=" d-flex align-items-center justify-content-center gap-2 mt-4">
                <MyButton colore={"primary"} text={"Accedi"} type={"submit"} ></MyButton>
                <span>  o</span>
                <MyButton colore={"primary"} text={"Registrati"} ></MyButton>
              </div>
            </form>
            <div className="mt-4">
              <a href="#" >Password  dimenticata?</a>
              <br></br>
              <a href="#">Nuovo su linkedIn?Iscriviti ora </a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}  ></Col>
      </Row>
      </Container>
    </div>

  );
}
export default Login
