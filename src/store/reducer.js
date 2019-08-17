const initialState = {
  quotations: {
    1: {
      date: new Date(),
      origin: "New York",
      destination: "Miami",
      price: 300
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ROUTE":
      console.log("Clicked add route ");
      return state;
      break;

    default:
      break;
  }

  return state;
};

export default reducer;
