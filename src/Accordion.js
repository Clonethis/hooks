import React from "react";
const Accordion = ({ items }) => {
  console.log("this my props ", items);
  // 'index' is like counter set by react
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.heading}>
        <div
          className="ui styled accordion"
          onClick={() => console.log(item.heading, index)}
        >
          <div class="active title">
            <i class="dropdown icon"></i>
            {item.heading}
          </div>
          <div class="active content">
            <p>{item.text}</p>
          </div>
          <h1></h1>
        </div>
      </React.Fragment>
    );
  });
  return <div>{renderedItems};</div>;
};
export default Accordion;
