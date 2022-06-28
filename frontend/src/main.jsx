import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ExportContext from "./contexts/Context";

ReactDOM.render(
  <React.StrictMode>
    <ExportContext.Provider>
      <App />
    </ExportContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
