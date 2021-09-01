import React, { Fragment } from "react";
const Accordion = (props) => {
  return (
    <React.Fragment>
      <div className="ui styled accordion">
        <div class="active title">
          <i class="dropdown icon"></i>
          {props.items[0].heading}
        </div>
        <div class="active content">
          <p>{props.items[0].text}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Accordion;
