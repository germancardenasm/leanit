import { initialShippings, initialShippingFormState } from "./initialShippings";
import { getDefaultForm } from "./Actions";

const initialState = {
  quotations: initialShippings,
  quotesOnScreen: [],
  shippingForm: initialShippingFormState,
  formDisable: false,
  addingRoute: false,
  statusInput: "",
  showSearchResults: false,
  selectedRouteOption: false,
  searchInput: "",
  filters: {
    sale: false,
    calendar: false,
    heart: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ALL_TRACKING":
      const newTrackingOnScreen = state.quotations.map(el => el.id);
      return { ...state, quotesOnScreen: newTrackingOnScreen };

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
      const trackingOnScreen = newQuotationsArr.map(el => el.id);
      return {
        ...state,
        quotations: newQuotationsArr,
        addingRoute: false,
        quotesOnScreen: trackingOnScreen
      };

    case "DELETE_ROUTE":
      const newQuotation = state.quotations.filter(
        (item, index) => item.id !== action.value.id
      );
      return {
        ...state,
        quotations: newQuotation
      };

    case "LOAD_ROUTE":
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
      return {
        ...state,
        addingRoute: false,
        formDisable: false,
        shippingForm: newForm
      };

    case "CHANGE_SEARCH_INPUT":
      return { ...state, searchInput: action.value };

    case "CHANGE_STATUS_INPUT":
      return {
        ...state,
        statusInput: action.value,
        showSearchResults: true
      };

    case "SELECT_ROUTE_STATUS":
      const selectedTrackingIndex = state.quotations.findIndex(
        element => element.id == action.value
      );
      const selectedTrackingId = state.quotations[selectedTrackingIndex].id;
      return {
        ...state,
        statusInput: action.value,
        showSearchResults: false,
        quotesOnScreen: [selectedTrackingId]
      };

    case "SET_DELIVERED":
      const newQuotations = [...state.quotations];
      // eslint-disable-next-line eqeqeq
      const pos = newQuotations.findIndex(el => el.id == state.statusInput);
      newQuotations[pos].status = "delivered";
      return { ...state, quotations: [...newQuotations] };

    case "CHANGE_FORM_INPUT":
      const newShippingForm = { ...state.shippingForm };
      newShippingForm[action.identifier] = action.value;
      return { ...state, shippingForm: newShippingForm };

    case "TOGGLE_FILTER":
      let filter = "";
      let toogleSelected = "";
      switch (action.value) {
        case "Delivered":
          toogleSelected = "calendar";
          filter = "delivered";
          break;
        case "In Transit":
          toogleSelected = "sale";
          filter = "transit";
          break;
        case "Delayed":
          toogleSelected = "heart";
          filter = "delayed";
          break;
        default:
          toogleSelected = "";
          break;
      }

      const newFilters = { ...state.filters };
      newFilters[toogleSelected] = !newFilters[toogleSelected];

      let onScreen = state.quotations.map(el => el.id);
      if (newFilters[toogleSelected]) {
        onScreen = state.quotations
          .filter(el => el.status === filter)
          .map(el => el.id);
      }

      return { ...state, filters: newFilters, quotesOnScreen: onScreen };
    default:
      break;
  }

  return state;
};

export default reducer;
