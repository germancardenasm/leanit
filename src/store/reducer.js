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
  shippingForm: {
    fromName: "",
    fromStreet: "",
    fromZipCode: "",
    fromCity: "",
    fromCountry: "",
    fromEmail: "",
    toName: "",
    toStreet: "",
    toZipCode: "",
    toCity: "",
    toCountry: "",
    toEmail: "",
    deliveryMethod: "",
    price: ""
  },
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

    case "CHANGE_INPUT":
      const newShippingForm = { ...state.shippingForm };
      newShippingForm[action.identifier] = action.value;
      return { ...state, shippingForm: newShippingForm };
    default:
      break;
  }

  return state;
};

export default reducer;
