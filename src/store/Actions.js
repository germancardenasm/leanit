export function getDefaultReminder() {
  return {
    id: new Date(),
    date: new Date(),
    origin: "New York, NY, 33250",
    destination: "Miami, FL, 32010",
    qty: 2,
    price: 300,
    delivered: false
  };
}
