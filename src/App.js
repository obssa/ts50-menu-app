import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import "./App.css";
//import MyMenu from "./components/mymenu/mymenu";
import React, { Component } from "react";
import { getOrdersType } from "./components/services/fakeOrders";
import { getOrders } from "./components/services/fakeSubOrders";

class App extends Component {
  state = { ordersType: getOrdersType(), orders: getOrders() };
  handlePageChange = (order) => {
    this.setState({ selectedItem: order });
  };
  handleAdd = (item) => {
    const data = item === undefined ? "no Orders yet " : item;
    // return this.setState({ subOrders: data });
    console.log(data);
    // return data;
  };
  render() {
    const { ordersType, orders, selectedItem } = this.state;
    const selectedOrder = selectedItem
      ? orders.filter((order) => order.ordersType._id === selectedItem._id)
      : orders;
    return (
      <>
        <main className="container">
          <Header />
          <Menu
            ordersType={ordersType}
            orders={orders}
            selectedOrder={selectedOrder}
            onPageChange={this.handlePageChange}
            onAdd={this.handleAdd}
          />
        </main>
      </>
    );
  }
}

export default App;
