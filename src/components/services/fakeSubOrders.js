//import * as ordersTypeAPI from "./fakeOrder";
const orders = [
  { _id: 1, name: "pizza 1", ordersType: { _id: 1, name: "pizza" }, price: 45 },
  { _id: 2, name: "pizza 2", ordersType: { _id: 1, name: "pizza" }, price: 45 },
  { _id: 3, name: "pizza 3", ordersType: { _id: 1, name: "pizza" }, price: 45 },
  { _id: 4, name: "pizza 4", ordersType: { _id: 1, name: "pizza" }, price: 45 },
  { _id: 5, name: "pizza 5", ordersType: { _id: 1, name: "pizza" }, price: 45 },
  { _id: 6, name: "pizza 6", ordersType: { _id: 1, name: "pizza" }, price: 45 },
  {
    _id: 7,
    name: "Barger 1",
    ordersType: { _id: 2, name: "Barger" },
    price: 45,
  },
  {
    _id: 8,
    name: "Barger 2",
    ordersType: { _id: 2, name: "Barger" },
    price: 45,
  },
  {
    _id: 9,
    name: "Barger 3",
    ordersType: { _id: 2, name: "Barger" },
    price: 45,
  },
  {
    _id: 10,
    name: "Barger 4",
    ordersType: { _id: 2, name: "Barger" },
    price: 45,
  },
  {
    _id: 11,
    name: "Barger 5",
    ordersType: { _id: 2, name: "Barger" },
    price: 45,
  },
  {
    _id: 12,
    name: "Barger 6",
    ordersType: { _id: 2, name: "Barger" },
    price: 45,
  },
  {
    _id: 13,
    name: "Chips 4",
    ordersType: { _id: 4, name: "Chips" },
    price: 45,
  },
  {
    _id: 14,
    name: "Chips 5",
    ordersType: { _id: 4, name: "Chips" },
    price: 45,
  },
  {
    _id: 15,
    name: "Chips 6",
    ordersType: { _id: 4, name: "Chips" },
    price: 45,
  },
  {
    _id: 16,
    name: "Coca Cola 4",
    ordersType: { _id: 3, name: "Soft Drink" },
    price: 45,
  },
  {
    _id: 17,
    name: "Fanta 5",
    ordersType: { _id: 3, name: "Soft Drink" },
    price: 45,
  },
  {
    _id: 18,
    name: "Pepsi 6",
    ordersType: { _id: 3, name: "Soft Drink" },
    price: 45,
  },
  {
    _id: 19,
    name: "juice 4",
    ordersType: { _id: 5, name: "Juice" },
    price: 45,
  },
  {
    _id: 21,
    name: "Juice 5",
    ordersType: { _id: 5, name: "Juice" },
    price: 45,
  },
  {
    _id: 20,
    name: "Juice 6",
    ordersType: { _id: 5, name: "Juice" },
    price: 45,
  },
  {
    _id: 197,
    name: "Dinner 4",
    ordersType: { _id: 6, name: "Dinner" },
    price: 45,
  },
  {
    _id: 214,
    name: "Dinner 5",
    ordersType: { _id: 6, name: "Dinner" },
    price: 45,
  },
  {
    _id: 287,
    name: "Dinner 6",
    ordersType: { _id: 6, name: "Dinner" },
    price: 45,
  },
];
export function getOrders() {
  return orders;
}
