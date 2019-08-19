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
    }
  ],
  addingRoute: false,
  statusInput: "",
  searchInput: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ROUTE":
      console.log("Clicked add route ");
      return { ...state, addingRoute: true };

    case "DELETE_ROUTE":
      console.log("Clicked DELETE route ");
      return { ...state, addingRoute: true };

    case "CLOSE_MODAL":
      console.log("Clicked Close Modal ");
      return { ...state, addingRoute: false };

    case "CHANGE_SEARCH_INPUT":
      return { ...state, searchInput: action.value };

    case "CHANGE_STATUS_INPUT":
      return { ...state, statusInput: action.value };
    default:
      break;
  }

  return state;
};

export default reducer;
