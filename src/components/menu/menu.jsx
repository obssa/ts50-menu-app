//list of main orders
//list of sub orders
//submit button
import React, { Component } from "react";
import MyMenu from "../mymenu/mymenu";
import { getOrdersType } from "../services/fakeOrders";
import { getOrders } from "../services/fakeSubOrders";

class Menu extends Component {
  state = { ordersType: getOrdersType(), orders: getOrders() };
  handlePageChange = (order) => {
    this.setState({ selectedItem: order });
  };
  handleAdd = (item) => {
    const data = item === undefined ? " " : item;
    return data;
  };

  render() {
    const { ordersType, orders, selectedItem } = this.state;
    const selectedOrder = selectedItem
      ? orders.filter((order) => order.ordersType._id === selectedItem._id)
      : orders;
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              {ordersType.map((item) => (
                <th key={item._id} onClick={() => this.handlePageChange(item)}>
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedOrder.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleAdd(order)}
                  >
                    ADD
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Menu;
