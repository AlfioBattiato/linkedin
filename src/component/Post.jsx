import React from "react";
import { Col } from "react-bootstrap";

function Post(props) {
    const [yearS, monthS, dayS] = props.createdAt.split("T")[0].split("-");

    return (
        <Col xs={12} className="d-flex align-items-center gap-3 py-2">
            <div className="container bg-white hov py-2 rounded">
                <div className="d-flex gap-2 align-items-center">
                    <img
                        className="object-fit-cover rounded-circle"
                        width={"40rem"}
                        height={"40rem"}
                        alt="img"
                        src={props.imgP}
                    />
                    <p style={{ width: "70%" }} className="m-0 text-secondary sizeSmall">
                        <strong>{props.username}</strong> ha diffuso...
                    </p>
                    <p className="sizeSmall text-secondary m-0 ">{yearS}-{monthS}-{dayS}</p>
                </div>
                <p className="pt-2">{props.text}</p>
                <div className="text-center">
                    {props.image && <img alt="img" src={props.image} style={{ maxWidth: "100%" }} />}

                </div>
                <div className="mt-2 d-flex">
                    <i className="bi bi-trash3-fill text-danger ms-auto"></i>
                </div>
            </div>
        </Col>
    );
}

export default Post;
