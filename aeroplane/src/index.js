import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { Store } from "./Store/Store";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Suspense
        fallback={
          <h1
            style={{
              display: "block",
              position: "absolute",
              top: "40%",
              left: "30%",
              width: "100%",
            }}
          >
            Loading...
          </h1>
        }
      >
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);

