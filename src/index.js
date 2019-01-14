import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import ConnectedIntlProvider from "./commons/intl/ConnectedIntlProvider";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <App />
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById("root")
);
