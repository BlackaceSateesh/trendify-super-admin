import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerLoader = (props) => {
    return (
        <>
            <Spinner animation="border" role="status" style={props.style}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
};

export default SpinnerLoader;
