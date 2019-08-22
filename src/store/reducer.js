import { initialShippings, initialShippingFormState } from "./initialShippings";
import { getDefaultForm } from "./Actions";

const initialState = {
  quotations: initialShippings,
  shippingForm: initialShippingFormState,
  formDisable: false,
  addingRoute: false,
  statusInput: "",
  showSearchResults: false,
  selectedRouteOption: false,
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
        addingRoute: true,
        formDisable: true
      };

    case "CLOSE_MODAL":
      const newForm = getDefaultForm();
      console.table(newForm);
      return { ...state, addingRoute: false, formDisable: false };

    case "CHANGE_SEARCH_INPUT":
      return { ...state, searchInput: action.value };

    case "CHANGE_STATUS_INPUT":
      console.log("[reducer.js] CHANGE_STATUS_INPUT:", action.value);
      return {
        ...state,
        statusInput: action.value,
        showSearchResults: true
      };

    case "CHANGE_FORM_INPUT":
      const newShippingForm = { ...state.shippingForm };
      newShippingForm[action.identifier] = action.value;
      return { ...state, shippingForm: newShippingForm };

    case "SELECT_ROUTE_STATUS":
      console.log("[reducer.js] ROUTE SELECTED:", action.value);
      return { ...state, statusInput: action.value, showSearchResults: false };
    default:
      break;
  }

  return state;
};

export default reducer;
