import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import ArrowDown from "../Images/ArrowDown";
import uniqid from "uniqid";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    className="bg-theme d-flex pl-4 py-2 pr-3 text-white align-items-center position-relative justify-content-between"
    style={{
      borderRadius: "18px",
      fontSize: "14px",
      zIndex: 5,
      cursor: "pointer",
      minWidth: "170px",
    }}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <div className="mr-2">{children}</div>
    <div
      className="square-30 bg-theme-darker flex-center d-flex"
      style={{ borderRadius: "11px" }}
    >
      <ArrowDown></ArrowDown>
    </div>
  </div>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={Object.assign({}, style, { width: "100%", minWidth: "auto" })}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled w-100">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const Select = ({
  children,
  items = ["Item 1", "Item 2", "Item 3"],
  selected = 0,
  setSelected = () => {},
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {items.map((x, i) => (
          <Dropdown.Item key={uniqid()}>
            <div
              className={
                i === selected
                  ? "my-dropdown-item-selected"
                  : "my-dropdown-item"
              }
              eventKey={i + 1}
              onClick={() => setSelected(i)}
            >
              {x}
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
