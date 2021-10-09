// functions connect, mapStateTopProps, count at the ned
//  increment and decrement action creators
import { Component } from "react";
import { connect } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
const increment = () => ({
  // ! every action creator needs type
  type: "INCREMENT",
});
const decrement = () => ({
  type: "DECREMENT",
});
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }
  componentDidUpdate = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div className="ui row">
        <div className="column eight width wide">
          <button onClick={props.increment}>Add one</button>
          <button onClick={props.decrement}>Remove one</button>
          <h3>Count{this.props.count}</h3>
        </div>
      </div>
    );
  }
}
const mapToStateProps = (state) => {
  return {
    count: state.count,
  };
};
// Defining basics for showing This component -> store needed for redux stuff

const store = createStore(
  combineReducers({
    // ! Created Reducer assigned into 'count' property
    count: (count = 0, action) => {
      if (action.type === "increment") {
        return count + 1;
      } else if (action.type === "decrement") {
        return count - 1;
      } else {
        return count;
      }
    },
  })
);
// action creator passed as a second argument for the connect function
// so Counter/Calculator will have its props
export default connect(mapToStateProps, { increment, decrement })(Calculator);
