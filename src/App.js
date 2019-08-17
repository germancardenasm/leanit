import React from "react";
import "./App.css";
import ControlPanel from "./containers/ControlPanel/ControlPanel";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ControlPanel />
      </div>
    </Provider>
  );
}

export default App;
