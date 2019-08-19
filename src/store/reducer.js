const initialState = {
  quotations: [
    {
      id: 1,
      date: new Date(),
      fromName: "German Cardenas",
      fromStreet: "Calle 27 sur # 27B - 87",
      fromZipCode: "055420",
      fromCity: "New York",
      fromState: "NY",
      fromEmail: "germancardenas@gmail.com",
      fromPhone: "32155872",
      toName: "Paola Montes",
      toStreet: "Carrera 77 sur # 27B - 87",
      toZipCode: "033212",
      toCity: "Atlanta",
      toState: "GA",
      toEmail: "paolamontes@gmail.com",
      toPhone: "32155872",
      deliveryMethod: "regular",
      price: "23",
      delivered: false,
      qty: 2
    }
  ],
  shippingForm: {
    id: 1,
    date: new Date(),
    fromName: "",
    fromStreet: "",
    fromZipCode: "",
    fromCity: "",
    fromCountry: "",
    fromEmail: "",
    fromPhone: "",
    toName: "",
    toStreet: "",
    toZipCode: "",
    toCity: "",
    toCountry: "",
    toEmail: "",
    toPhone: "",
    deliveryMethod: "",
    price: "",
    delivered: false,
    qty: 0
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

    case "SAVE_NEW_ROUTE":
      console.log("Clicked SAVE route ");
      const newQuotationsArr = [...state.quotations];
      newQuotationsArr.push(state.shippingForm);
      return { ...state, quotations: newQuotationsArr };

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

    case "CHANGE_FORM_INPUT":
      const newShippingForm = { ...state.shippingForm };
      newShippingForm[action.identifier] = action.value;
      return { ...state, shippingForm: newShippingForm };
    default:
      break;
  }

  return state;
};

export default reducer;
