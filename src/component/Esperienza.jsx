import { Col } from "react-bootstrap";

function Esperienza(props) {
    return (<>

        <Col xs={12} className="d-flex align-items-start gap-3 pt-3">
            <img className="object-fit-contain" width={"55rem"} height={"55rem"} alt="img" src={props.img}></img>
            <div>
                <h6>{props.title}</h6>
                <p className="m-0 text-secondary sizeSmall">{props.data}</p>
                <p className="m-0 text-secondary sizeSmall">{props.luogo}</p>
                <p className="mt-2 text-secondary sizeSmall fw-semibold">{props.competenze} </p>

            </div>
        </Col>



    </>)


}
export default Esperienza;