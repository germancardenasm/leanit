import { initialShippings } from "./initialShippings";
import { getDefaultForm } from "./Actions";

const initialState = {
  quotations: initialShippings,
  shippingForm: {
    id: "",
    date: "",
    fromName: "German",
    fromStreet: "",
    fromZipCode: "",
    fromCity: "",
    fromState: "",
    toName: "Paolaa",
    toStreet: "",
    toZipCode: "",
    toCity: "",
    toState: "",
    deliveryMethod: "regular",
    price: "",
    status: "delayed",
    qty: 3
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

    case "LOAD_ROUTE":
      console.log("LOAD_ROUTE ID:  ", action.value);
      const quotations = [...state.quotations];
      const index = quotations.findIndex(
        element => element.id === action.value
      );
      const shippingInfo = { ...state.quotations[index] };

      return {
        ...state,
        shippingForm: { ...shippingInfo },
        addingRoute: true
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
