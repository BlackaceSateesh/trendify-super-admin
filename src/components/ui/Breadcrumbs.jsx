import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Breadcrumbs = (props) => {
  return (
    <>
      <div className="Breadcrumbs">
        <Breadcrumb>
          {props?.parentName && (
            <Breadcrumb.Item href="#">{props.parentName}</Breadcrumb.Item>
          )}
          <Breadcrumb.Item active>{props.pageName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default Breadcrumbs;
