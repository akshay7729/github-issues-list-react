import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownComp = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComp;
