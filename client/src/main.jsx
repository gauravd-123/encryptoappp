import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    {/* <BrowserRouter> */}
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    {/* </BrowserRouter> */}
  </HashRouter>,
  document.getElementById("root")
);
