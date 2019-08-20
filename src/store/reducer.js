import { initialShippings } from "./initialShippings";
import { getDefaultForm } from "./Actions";

const initialState = {
  quotations: initialShippings,
  shippingForm: {
    id: "",
    date: "",
    fromName: "",
    fromStreet: "",
    fromZipCode: "",
    fromCity: "",
    fromState: "",
    toName: "",
    toStreet: "",
    toZipCode: "",
    toCity: "",
    toState: "",
    deliveryMethod: "",
    price: "",
    status: "transit",
    qty: 0
  },
  addingRoute: false,
  statusInput: "",
  searchInput: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ROUTE":
      return { ...state, addingRoute: true };

    case "SAVE_NEW_ROUTE":
      const newQuotationsArr = [...state.quotations];
      const copyShippingForm = {
        ...state.shippingForm,
        id: Date.parse(new Date()),
        date: new Date()
      };
      newQuotationsArr.push(copyShippingForm);
      return { ...state, quotations: newQuotationsArr, addingRoute: false };

    case "DELETE_ROUTE":
      const newQuotation = state.quotations.filter(
        (item, index) => item.id !== action.value.id
      );
      return {
        ...state,
        quotations: newQuotation
      };

    case "CLOSE_MODAL":
      const newForm = getDefaultForm();
      console.table(newForm);
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
