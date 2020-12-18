import React, { Component } from "react";
import OrderTaken from "./ordertaken";
class AddButton extends Component {
  render() {
    const { onAdd, order } = this.props;
    return (
      <>
        <button className="btn btn-primary" onClick={() => onAdd(order)}>
          ADD
        </button>
      </>
    );
  }
}

export default AddButton;
