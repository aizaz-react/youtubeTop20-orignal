import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Fathom from "fathom-react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Fathom siteId="YOCXKLHE">
          <App />
        </Fathom>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
