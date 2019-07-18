import React, { Component } from "react";

class Counter extends Component {
  //styling for Div
  styles = {
    fontSize: 28,
    textAlign: "left",
    marginLeft: 10
  };
  // Styling for Span that showing product qty
  spanStyle = {
    width: 60
  };

  render() {
    const { onDecrement, onIncrement, onDelete, counter } = this.props;
    console.log("Counter-rendered");
    return (
      <div style={this.styles}>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDecrement(counter)}
        >
          -
        </button>
        <span style={this.spanStyle} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
