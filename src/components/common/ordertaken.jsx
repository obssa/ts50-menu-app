import React, { Component } from "react";
class OrderTaken extends Component {
  change = (x) => {
    console.log(x);
  };
  render() {
    return <h1>{this.change(this.props.selectedOrder)}</h1>;
  }
}

export default OrderTaken;
