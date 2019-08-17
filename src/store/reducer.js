const initialState = {
  quotations: [
    {
      id: 1,
      date: new Date(),
      origin: "New York, NY, 33250",
      destination: "Miami, FL, 32010",
      qty: 2,
      price: 300,
      delivered: false
    },
    {
      id: 2,
      date: new Date(),
      origin: "Atlanta GA, 45220",
      destination: "Las Vegas, NV, 22015",
      qty: 3,
      price: 300,
      delivered: true
    }
  ],
  addingRoute: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ROUTE":
      console.log("Clicked add route ");
      return { ...state, addingRoute: true };
      break;
    case "CLOSE_MODAL":
      console.log("Clicked Close Modal ");
      return { ...state, addingRoute: false };
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
