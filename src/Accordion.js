import React from "react";
const Accordion = (props) => {
  console.log("this my props ", props);
  return (
    <React.Fragment key={props.items[0]}>
      <div className="ui styled accordion">
        <div class="active title">
          <i class="dropdown icon"></i>
          {props.items[0].heading}
        </div>
        <div class="active content">
          <p>{props.items[0].text}</p>
        </div>
        <h1 style={(fontSize = "80px")}>Tomáš má rád penisy</h1>
      </div>
    </React.Fragment>
  );
};
export default Accordion;
