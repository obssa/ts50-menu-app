const ordersType = [
  {
    _id: 1,
    name: " Pizza",
  },
  {
    _id: 2,
    name: "Barger",
  },
  {
    _id: 3,
    name: "Soft Drink",
  },
  {
    _id: 4,
    name: "Chips",
  },
  {
    _id: 5,
    name: "jucie",
  },
  {
    _id: 6,
    name: "Dinner",
  },
];
export function getOrdersType() {
  //ot stands for orderstype
  return ordersType.filter((ot) => ot);
}
