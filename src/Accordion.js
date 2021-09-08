import React, { useState } from "react";
const Accordion = ({ items }) => {
  //  state = { selected: 0 };
  //creates statefull class inside of stateless (maybe better)
  // 'activeIndex' -> state reference | 'setActiveindex' -> setting state -> ALL COULD BE NAMED AS I WOULD LIKE
  // for multiple state variables need to create more 'const' arrays with = useState()
  const [activeIndex, setActiveindex] = useState(null);
  const onTitleClick = (index) => {
    console.log("Bullshit ", index);
    // React statefull widget updating state
    // this.setState({
    //   selected: index,
    // });
    setActiveindex(index);
  };
  console.log("this my props ", items);
  // 'index' is like counter set by react
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.heading}>
        <div class="ui styled accordion" onClick={() => onTitleClick(index)}>
          {/* able to join strings like that */}
          <div class={`title ${active}`}>
            <i class="dropdown icon"></i>
            {item.heading}
          </div>
          <div class={`content ${active}`}>
            <p>{item.text}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div>
      {renderedItems}
      <div class="counter">
        <h1>Count:</h1>
        <h1>{activeIndex}</h1>
      </div>
    </div>
  );
};
export default Accordion;
