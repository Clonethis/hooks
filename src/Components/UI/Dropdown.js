import React, { useState, useEffect, useRef } from "react";
//Done Todo needs to close down after clicking outside of dropdown
// todo needs text responsive to selection
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        // returning early(skipping code )
        // console.log("if is running");
        return;
      }
      console.log("Use effenct");
      setOpen(open);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
    // cleaning event listener, when not needed (in case of removing 'Dropdown')
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => {
          // console.log("ui selection OnClick");
          onSelectedChange(option);
        }}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  console.log(ref.current);
  return (
    // ref.current can acces this element
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <div className="label">{label}</div>

          <div
            onClick={() => {
              // console.log("ui selection OnClick");
              setOpen(!open);
            }}
            // only for making things look good

            className={`ui selection dropdown  ${open ? "visible active" : ""}`}
          >
            <i
              className="dropdown icon"
              onClick={() => {
                console.log("dropdown OnClick");
                setOpen(!open);
              }}
            ></i>
            <div className="text">{selected.label}</div>

            <div
              // sets visibility of menu after clicking on icon
              className={`menu ${open ? "visible" : ""} transition`}
            >
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      {/* TODO this needs to do */}
      {/* <h1 style={{color:${selected.value}}}>I have color same as you select</h1> */}
    </div>
  );
};
export default Dropdown;
