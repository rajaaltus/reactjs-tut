import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
      counters
    } = this.props;

    return (
      <div style={this.styles}>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        <button className="btn btn-success btn-sm m-2">Add New</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
