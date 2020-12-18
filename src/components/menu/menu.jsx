//list of main orders
//list of sub orders
//submit button
import React, { Component } from "react";
import AddButton from "../common/addbutton";
import { getOrdersType } from "../services/fakeOrders";
import { getOrders } from "../services/fakeSubOrders";
import OrderTaken from "../common/ordertaken";

class Menu extends Component {
  /* state = { ordersType: getOrdersType(), orders: getOrders() };
  handlePageChange = (order) => {
    this.setState({ selectedItem: order });
  };
  handleAdd = (item) => {
    const data = item === undefined ? "no Orders yet " : item;
    // return this.setState({ subOrders: data });
    console.log(data);
    // return data;
  };
*/
  render() {
    const {
      ordersType,
      orders,
      selectedOrder,
      onAdd,
      onPageChange,
    } = this.props;
    /* const selectedOrder = selectedItem
      ? orders.filter((order) => order.ordersType._id === selectedItem._id)
      : orders;*/
    //console.log("in the render method " + this.handleAdd());
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              {ordersType.map((item) => (
                <th key={item._id} onClick={() => onPageChange(item)}>
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
                  <AddButton onAdd={onAdd} order={order} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <OrderTaken selectedOrder={onAdd} />
      </>
    );
  }
}

export default Menu;
